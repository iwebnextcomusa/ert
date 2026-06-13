import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  scrollProgress?: number; // pass from parent to trigger scroll animations
}

export default function ThreeScene({ scrollProgress = 0 }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(scrollProgress);
  scrollRef.current = scrollProgress;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Create Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a1128, 0.015); // Dark Navy color fog matched with branding

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 100);
    camera.position.set(0, 5, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background to blend with CSS gradient
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // Create Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff6b00, 2, 50); // Premium orange light
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0077ff, 1.5, 40); // Blue accents
    pointLight2.position.set(-10, -5, 5);
    scene.add(pointLight2);

    // Objects Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Interactive 3D Gold Transport Grid (represents premium routes)
    const size = 60;
    const divisions = 30;
    const gridHelper = new THREE.GridHelper(size, divisions, 0xff6b00, 0x1d2d44);
    gridHelper.position.y = -2;
    group.add(gridHelper);

    // 2. Glowing Particle Constellation / Celestial Highway
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color(0xff6b00);
    const navyColor = new THREE.Color(0x0077ff);

    for (let i = 0; i < particleCount; i++) {
      // Create a long corridor/highway of particles
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.2) * 15;
      const z = (Math.random() - 0.5) * 100;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation representing luxury orange and navy
      const mixRatio = Math.random();
      const finalColor = new THREE.Color().lerpColors(orangeColor, navyColor, mixRatio);
      colors[i * 3] = finalColor.r;
      colors[i * 3 + 1] = finalColor.g;
      colors[i * 3 + 2] = finalColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom circular particle texture via canvas path
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starParticles = new THREE.Points(geometry, material);
    group.add(starParticles);

    // 3. Central Abstract Luxury Orbital Ring (represents Epic Rides sphere of operation)
    const ringGeometry = new THREE.TorusGeometry(3, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b00, // Premium orange accent
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
    });
    const torus = new THREE.Mesh(ringGeometry, ringMaterial);
    torus.position.set(0, 2, 0);
    torus.rotation.x = Math.PI / 3;
    group.add(torus);

    // Secondary orbits
    const ringGeometry2 = new THREE.TorusGeometry(4.5, 0.02, 12, 80);
    const torus2 = new THREE.Mesh(ringGeometry2, ringMaterial);
    torus2.position.set(0, 2, 0);
    torus2.rotation.y = Math.PI / 4;
    group.add(torus2);

    // Mouse Tracking variables for smooth camera lerping
    let mouseX = 0;
    let mouseY = 0;
    const targetVector = new THREE.Vector2(0, 0);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / width) * 2 - 1;
      mouseY = -(event.clientY / height) * 2 + 1;
      targetVector.set(mouseX * 4, mouseY * 3);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ResizeObserver implementation to avoid fixed width calculation and respond beautifully to grids/panels
    let resizeAnimationFrameId: number | null = null;
    const resizeObserver = new ResizeObserver((entries) => {
      if (resizeAnimationFrameId !== null) {
        cancelAnimationFrame(resizeAnimationFrameId);
      }
      resizeAnimationFrameId = requestAnimationFrame(() => {
        if (!entries || entries.length === 0) return;
        for (let entry of entries) {
          const newWidth = entry.contentRect.width;
          const newHeight = entry.contentRect.height;
          if (newWidth === 0 || newHeight === 0) continue;
          
          width = newWidth;
          height = newHeight;
          
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          
          renderer.setSize(width, height);
        }
      });
    });
    
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera lerp based on mouse coordinates
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 3 + 2.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 1.5, 0);

      // Rotate abstract 3D orbits and stars
      torus.rotation.z += 0.003;
      torus.rotation.y += 0.002;
      torus2.rotation.z -= 0.0015;
      torus2.rotation.x += 0.002;

      // Warp speed simulation on star particles corridor
      // Move star particles forward
      const positionsArray = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Move Z
        positionsArray[i * 3 + 2] += 0.15 + (scrollRef.current * 0.3); // Speed scales up with scroll
        
        // Wrap around when it gets too close to the screen
        if (positionsArray[i * 3 + 2] > 50) {
          positionsArray[i * 3 + 2] = -50;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Scroll-triggered mesh shift (rotates and transitions scene depth)
      group.rotation.y = scrollRef.current * Math.PI * 0.4;
      group.position.z = scrollRef.current * 10;
      group.position.y = -scrollRef.current * 2;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeAnimationFrameId !== null) {
        cancelAnimationFrame(resizeAnimationFrameId);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      // Dispose geometry and materials
      geometry.dispose();
      material.dispose();
      ringGeometry.dispose();
      ringGeometry2.dispose();
      ringMaterial.dispose();
      particleTexture.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="3d-interactive-canvas-container"
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
    />
  );
}
