import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    globe: THREE.Group
    particles: THREE.Points
    dispose: () => void
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create globe group
    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    // Create main globe sphere
    const geometry = new THREE.SphereGeometry(6, 64, 64)
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#6366f1'),
      transparent: true,
      opacity: 0.1,
      wireframe: true
    })
    const globe = new THREE.Mesh(geometry, material)
    globeGroup.add(globe)

    // Create outer glow sphere
    const glowGeometry = new THREE.SphereGeometry(5.5, 64, 64)
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#818cf8'),
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    })
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial)
    globeGroup.add(glowSphere)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create particles in a spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const radius = 5 + (Math.random() * 2 - 1) * 0.5

      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)

      // Add color variation
      colors[i] = 0.6 + Math.random() * 0.4
      colors[i + 1] = 0.6 + Math.random() * 0.4
      colors[i + 2] = 1
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    globeGroup.add(particles)

    // Create connecting lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#818cf8'),
      transparent: true,
      opacity: 0.3
    })

    for (let i = 0; i < 20; i++) {
      const lineGeometry = new THREE.BufferGeometry()
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      lineGeometry.setFromPoints([start, end])
      const line = new THREE.Line(lineGeometry, linesMaterial)
      globeGroup.add(line)
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x6366f1, 1)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x818cf8, 1)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Position camera
    camera.position.z = 15

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate globe group
      globeGroup.rotation.y += 0.009
      globeGroup.rotation.x += 0.0005

      // Animate particles
      const positions = particles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.001
      }
      particles.geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)
    animate()

    // Store references for cleanup
    globeRef.current = {
      scene,
      camera,
      renderer,
      globe: globeGroup,
      particles,
      dispose: () => {
        window.removeEventListener('resize', handleResize)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        glowGeometry.dispose()
        glowMaterial.dispose()
        particlesGeometry.dispose()
        particlesMaterial.dispose()
      }
    }

    return () => {
      if (globeRef.current) {
        globeRef.current.dispose()
      }
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    // <div 
    //   ref={containerRef} 
    //   className="absolute inset-0 -z-10"
    //   style={{ 
    //     background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 35%, transparent 70%)'
    //   }}
    // />
//     <div 
//   ref={containerRef} 
//   className="absolute inset-0 -z-10 transform -translate-y-16 md:-translate-y-32"
//   style={{ 
//     background: 'radial-gradient(circle at center, rgba(215, 241, 99, 0.15) 0%, rgba(211, 255, 15, 0.05) 35%, transparent 70%)'
//   }}
// />

// <div 
//   ref={containerRef} 
//   className="absolute inset-0 -z-10 transform -translate-y-16 md:-translate-y-32"
//   style={{ 
//     background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 35%, transparent 70%)'
//   }}
// />


//  <div 
// ref={containerRef} 
// className="absolute inset-0 -z-10 transform -translate-y-16 md:-translate-y-32"
// style={{
//   background: 'radial-gradient(circle at center, rgba(86, 104, 255, 0.15) 0%, rgba(86, 104, 255, 0.05) 35%, transparent 70%)'
// }}
// /> 

// <div 
// ref={containerRef} 
// className="absolute inset-0 -z-10 transform -translate-y-16 md:-translate-y-32"
// style={{
//   background: 'radial-gradient(circle at center, rgba(241, 196, 15, 0.15) 0%, rgba(241, 196, 15, 0.05) 35%, transparent 70%)'
// }}
// />


//  <div 
// ref={containerRef} 
// className="absolute inset-0 -z-10 transform -translate-y-16 md:-translate-y-32"
// style={{
//   background: 'radial-gradient(circle at center, rgba(235, 175, 20, 0.3) 0%, rgba(245, 201, 53, 0.1) 40%, transparent 80%)'
// }}
// /> 


// bestt

 <div 
ref={containerRef} 
className="absolute inset-0 -z-10 transform -translate-y-28 md:-translate-y-20"
style={{
  background: 'radial-gradient(circle at center, rgba(85, 40, 160, 1) 0%, rgba(20, 10, 60, 1) 26%, transparent 80%)'
}}


/>  

// purple

// style={{
  // background: 'radial-gradient(circle at center, rgba(136, 84, 208, 0.6) 0%, rgba(43, 28, 75, 0.8) 50%, rgba(10, 7, 27, 1) 100%)'
// }}

// gold
// background: 'radial-gradient(circle at center, rgba(255, 196, 0, 0.7) 0%, rgba(160, 96, 0, 0.6) 50%, rgba(60, 36, 0, 0.9) 100%)'

// blue 
// background: 'radial-gradient(circle at center, rgba(58, 123, 213, 0.7) 0%, rgba(32, 60, 91, 0.8) 50%, rgba(8, 14, 22, 1) 100%)'

// pink orange
// background: 'radial-gradient(circle at center, rgba(255, 99, 72, 0.6) 0%, rgba(153, 49, 36, 0.7) 50%, rgba(33, 17, 15, 0.9) 100%)'

// natural white glow 
// background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(128, 128, 128, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%)'



// {/* <div 
// ref={containerRef} 
// className="absolute inset-0 -z-10 transform -translate-y-16 md:-translate-y-32"
// style={{
//   background: 'radial-gradient(circle at center, rgba(215, 185, 90, 0.25) 0%, rgba(235, 200, 120, 0.1) 35%, transparent 70%)'
// }}
// />  */}



  )
}

export default Globe 