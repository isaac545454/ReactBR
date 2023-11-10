import { useRef, useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import * as THREE from 'three'

export const Cube = () => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const scene = new THREE.Scene()
	const [isSmallScreen] = useMediaQuery('(max-width: 48em)')
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 700)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

	const cube = useRef<THREE.Mesh>()

	useEffect(() => {
		const textureLoader = new THREE.TextureLoader()
		const rightTexture = textureLoader.load('Design sem nome (12).png')
		const leftTexture = textureLoader.load('Design sem nome (10).png')
		const topTexture = textureLoader.load('Design sem nome (13).png')
		const bottomTexture = textureLoader.load('Design sem nome (7).png')
		const frontTexture = textureLoader.load('Design sem nome (14).png')
		const backTexture = textureLoader.load('Design sem nome (6).png')

		const materials = [
			new THREE.MeshBasicMaterial({ map: rightTexture }), // Right face
			new THREE.MeshBasicMaterial({ map: leftTexture }), // Left face
			new THREE.MeshBasicMaterial({ map: topTexture }), // Top face
			new THREE.MeshBasicMaterial({ map: bottomTexture }), // Bottom face
			new THREE.MeshBasicMaterial({ map: frontTexture }), // Front face
			new THREE.MeshBasicMaterial({ map: backTexture }), // Back face
		]

		const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
		const cubeMesh = new THREE.Mesh(geometry, materials)
		cube.current = cubeMesh
		scene.add(cubeMesh)

		const animate = () => {
			requestAnimationFrame(animate)

			if (cube.current) {
				cube.current.rotation.x += 0.01
				cube.current.rotation.y += 0.011
			}

			renderer.render(scene, camera)
		}

		animate()

		return () => {
			scene.remove(cube.current!)
			materials.forEach(material => {
				material.map?.dispose()
				material.dispose()
			})

			renderer.dispose()
		}
	}, [camera, renderer, scene])

	useEffect(() => {
		// Set up the scene
		camera.position.z = 5
		renderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.3)
		renderer.setClearColor(0xffffff, 0)

		renderer.domElement.style.position = 'absolute'
		renderer.domElement.style.left = '50%'
		renderer.domElement.style.top = isSmallScreen ? '300px' : '400px'
		renderer.domElement.style.transform = 'translate(-50%, -50%)'

		document.body.appendChild(renderer.domElement)

		return () => {
			document.body.removeChild(renderer.domElement)
		}
	}, [renderer, camera])

	return <div />
}
