---
layout: /src/layouts/ProjectLayout.astro
title: "Gun Detector"
pubDate: 2026-09-13
category: ai
description: "Prototipo de visión artificial para detectar personas, pistolas y cuchillos en tiempo real."
languages: ["python", "opencv", "ultralytics", "yolo", "pytorch", "numpy", "cvat", "computer vision", "machine learning"]

image:
  url: "/images/projects-ia-cv/gun_detector.png"
  alt: "Interfaz del sistema Gun Detector con detecciones de personas y armas"
---

**Proyecto Gun Detector**

He desarrollado un prototipo de visión artificial capaz de detectar personas, pistolas y cuchillos en tiempo real utilizando una webcam. El sistema analiza cada imagen capturada por la cámara y muestra cuadros verdes alrededor de las personas y cuadros rojos cuando identifica un posible arma.

La aplicación incorpora un indicador de estado de riesgo, contador de FPS, contador de detecciones y un panel de evidencias que guarda una captura cuando aparece un nuevo tipo de arma. De esta forma, además de visualizar las detecciones en directo, es posible consultar un historial de los eventos detectados.

## Tecnologías

- Python
- OpenCV
- Ultralytics YOLO
- PyTorch
- NumPy
- CVAT
- Computer Vision
- Machine Learning

## Objetivo

Este proyecto consiste en crear una aplicación de detección de objetos en tiempo real utilizando un modelo YOLO personalizado. El modelo ha sido entrenado para reconocer personas, pistolas y cuchillos a partir de imágenes etiquetadas con CVAT.

Durante el desarrollo he trabajado en todo el flujo de un proyecto de visión artificial: captura de imágenes, etiquetado del dataset, entrenamiento del modelo, validación con imágenes separadas del entrenamiento e integración en una aplicación de vídeo mediante webcam.

La interfaz visual muestra el estado de riesgo, los FPS, el número de detecciones y un panel lateral con el historial de evidencias. También permite comprobar cómo Python, OpenCV y los modelos de inteligencia artificial pueden combinarse para crear aplicaciones interactivas capaces de analizar vídeo en tiempo real.

## Funcionalidades

- Detección de objetos en tiempo real.
- Detección de personas, pistolas y cuchillos.
- Entrenamiento de un modelo YOLO personalizado.
- Etiquetado de imágenes con CVAT.
- Procesamiento de vídeo mediante webcam.
- Interfaz visual desarrollada con OpenCV.
- Indicador visual del estado de riesgo.
- Contador de FPS y detecciones.
- Sistema automático de evidencias.
- Panel lateral con historial de detecciones.
- Validación del modelo con imágenes independientes del entrenamiento.

## Página informativa

👉 [Visitar página informativa](https://subtle-squirrel-3847c8.netlify.app/)
