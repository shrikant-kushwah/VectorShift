# VectorShift Frontend Technical Assessment

**Submission by:** Shrikant kushwah

This repository contains the solution for the VectorShift Frontend Technical Assessment. It is a full-stack application enabling users to build, visualize, and analyze node-based logic pipelines.

The project is divided into a **React Frontend** (using React Flow) and a **FastAPI Backend**.

---

## Key Features

### 1. Scalable Node Abstraction
-   **BaseNode Component**: A unified architecture (`BaseNode.js`) that handles common logic, styling, and handle rendering.
-   **Rapid Development**: New nodes can be created with just a configuration array, reducing boilerplate code by ~60%.
-   **Nodes Added**:
    -    **Color Picker**: Visual color selection.
    -    **Number Input**: Dedicated numeric field.
    -    **Checkbox**: Boolean toggle.
    -    **Multiplier**: Takes two inputs and represents a math operation.
    -    **Concatenate**: Merges two string inputs.

### 2. Modern UI/UX
-   **Unified Design System**: Built with **NextUI** and **Tailwind CSS**.
-   **Polished Components**: Custom-styled inputs, selects, and cards with hover effects and consistent typography.
-   **Responsive Canvas**: Infinite panning and zooming via React Flow.

### 3. Intelligent Text Node
-   **Dynamic Resizing**: The text node automatically adjusts its width and height as you type to fit the content.
-   **Variable Extraction**: Supports Handlebars-style syntax (e.g., `{{ variable_name }}`). Typing a variable automatically creates a corresponding **Input Handle** on the node, allowing dynamic connections.

### 4. Backend Integration & Analysis
-   **Pipeline Validation**: The frontend submits the entire graph (nodes & edges) to the backend.
-   **DAG Detection**: The backend uses **NetworkX** to analyze the graph topology and determine if it is a **Directed Acyclic Graph (DAG)**.
-   **Real-time Feedback**: Results (Node count, Edge count, DAG status) are displayed instantly via a Toast notification.

---

## Tech Stack

### Frontend (`/frontend`)
-   **Framework**: React latest version
-   **Visualization**: React Flow (Graph visualization engine)
-   **State Management**: Zustand (Lightweight global state)
-   **UI Library**: NextUI (Component library)
-   **Styling**: Tailwind CSS
-   **Icons**: React Icons
-   **Notifications**: React Toastify

### Backend (`/backend`)
-   **Framework**: FastAPI
-   **Graph Analysis**: NetworkX
-   **Validation**: Pydantic
-   **Server**: Uvicorn

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites
-   Node.js (v18 or higher)
-   Python (v3.9 or higher)
-   npm

### 1. Backend Setup
The backend runs on port `8000`.

```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload
```
*Backend will be available at: http://127.0.0.1:8000*

### 2. Frontend Setup
The frontend runs on port `3000`.

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```
*Frontend will be available at: http://localhost:3000*

---

## Project Structure

```text
root/
├── backend/
│   ├── main.py              # FastAPI application & DAG logic
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BaseNode.js  # Core abstraction for all nodes
│   │   │   └── FieldRenderer.js # Dynamic input renderer
│   │   ├── nodes/           # Individual node implementations
│   │   │   ├── textNode.js  # Logic for auto-resize & variables
│   │   │   ├── llmNode.js
│   │   │   └── ... (new nodes)
│   │   ├── submit.js        # Backend integration logic
│   │   ├── store.js         # Zustand state management
│   │   └── ui.js            # Main React Flow canvas
│   └── package.json
└── README.md
```