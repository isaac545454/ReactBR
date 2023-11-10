import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export const Cube = () => {
	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

	const cube = useRef<THREE.Mesh>()

	useEffect(() => {
		const textureLoader = new THREE.TextureLoader()
		const rightTexture = textureLoader.load('react.svg')
		const leftTexture = textureLoader.load('node.svg')
		const topTexture = textureLoader.load('Design sem nome (9).png')
		const bottomTexture = textureLoader.load('Design sem nome (7).png')
		const frontTexture = textureLoader.load('Design sem nome (5).png')
		const backTexture = textureLoader.load('Design sem nome (6).png')

		const materials = [
			new THREE.MeshBasicMaterial({ map: rightTexture }), // Right face
			new THREE.MeshBasicMaterial({ map: leftTexture }), // Left face
			new THREE.MeshBasicMaterial({ map: topTexture }), // Top face
			new THREE.MeshBasicMaterial({ map: bottomTexture }), // Bottom face
			new THREE.MeshBasicMaterial({ map: frontTexture }), // Front face
			new THREE.MeshBasicMaterial({ map: backTexture }), // Back face
		]

		const geometry = new THREE.BoxGeometry()
		const cubeMesh = new THREE.Mesh(geometry, materials)
		cube.current = cubeMesh
		scene.add(cubeMesh)

		const animate = () => {
			requestAnimationFrame(animate)

			if (cube.current) {
				cube.current.rotation.x += 0.002
				cube.current.rotation.y += 0.006
			}

			renderer.render(scene, camera)
		}

		animate()

		return () => {
			scene.remove(cube.current)
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
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setClearColor(0xffffff, 0) // Define o fundo como branco
		document.body.appendChild(renderer.domElement)

		return () => {
			document.body.removeChild(renderer.domElement)
		}
	}, [renderer, camera])

	return <div />
}
