<p align="center">
  <img src="logo.png" width="180" alt="MediaDropper logo">
</p>

<h1 align="center">🎧 MediaDropper</h1>

<p align="center">
  Transforma cualquier video de YouTube en archivos descargables de audio o video con un simple clic.  
  <br/>
  <strong>Tu formato, tus reglas.</strong>
</p>

---

## 🚀 ¿Qué es MediaDropper?

**MediaDropper** es una plataforma web que permite a los usuarios **convertir y descargar videos de YouTube** a múltiples formatos de audio y video como `MP3`, `MP4`, `WAV`, `AVI` y más, gracias al poder de `yt-dlp`, `ffmpeg`, y una interfaz intuitiva construida con **Next.js**.

---

## 🧩 Arquitectura

```
media-dropper/
│
├── backend/               # API REST en Flask
│   ├── app.py
│   ├── converter.py
│   ├── routes.py
│   └── ...
│
├── frontend/              # Interfaz en Next.js
│   ├── pages/
│   ├── components/
│   └── ...
│
└── README.md
```

---

## 💻 Tech Stack

### 🔙 Backend (Python + Flask)
- 🐍 Python 3
- ⚙️ Flask + Flasgger (Swagger)
- 📹 yt-dlp (descarga de YouTube)
- 🎞️ ffmpeg (conversión multimedia)

### 🔜 Frontend (Next.js + TailwindCSS)
- ⚛️ React (Next.js)
- 💅 TailwindCSS
- 📦 Axios (para llamadas a la API)
- 💾 Descarga directa de archivos

---

## 🛠️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tuusuario/mediadropper.git
cd mediadropper
```

---

## 🔙 Backend (Flask)

### 🔹 Requisitos

- Python 3.9+
- pip
- ffmpeg (instalado y en el PATH)

### 🔹 Instalación

```bash
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 🔹 Ejecutar

```bash
python app.py
```

### 🔹 Swagger Docs

Accede a: [http://localhost:5000/apidocs](http://localhost:5000/apidocs)

---

## 🔜 Frontend (Next.js)

### 🔹 Requisitos

- Node.js 18+
- npm o yarn

### 🔹 Instalación

```bash
cd frontend
npm install
```

### 🔹 Ejecutar

```bash
npm run dev
```

Accede a: [http://localhost:3000](http://localhost:3000)

---

## 📥 Endpoint de la API

### `POST /convert`

Convierte un video de YouTube al formato deseado.

#### 🔸 JSON body

```json
{
  "url": "https://www.youtube.com/watch?v=xxxxx",
  "format": "mp3"
}
```

#### 🔸 Formatos permitidos

- `mp3`, `wav`, `mp4`, `avi`, `mkv`

#### 🔸 Respuesta

Archivo convertido y descargable.


## 🔒 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.  
Puedes ver más en el archivo [`LICENSE`](LICENSE).

---

## 👨‍💻 Autor

Desarrollado con 💜 por **[yasirrdev]**  
Sígueme en GitHub: [github.com/yasirrdev](https://github.com/yasirrdev)

---

## ⭐ ¿Te gusta este proyecto?

¡Dale una ⭐ en GitHub y compártelo con quien lo necesite!

---
