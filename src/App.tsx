import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import "./App.css";

function App() {
  const [projectPath, setProjectPath] = useState<string | null>(null);

  async function openProject() {
    const selected = await open({
      directory: true,
      multiple: false,
      title: "Open CodeForge Project",
    });

    if (typeof selected === "string") {
      setProjectPath(selected);
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">◇</div>
          <span>CODEFORGE</span>
        </div>

        <div className="section">
          <div className="section-title">PROJECT</div>

          <button onClick={openProject}>
            📁 Explorer
          </button>

          <button>
            ⌕ Search
          </button>
        </div>

        <div className="section">
          <div className="section-title">GIT</div>
          <button>⑂ Changes</button>
          <button>◷ History</button>
        </div>

        <div className="section">
          <div className="section-title">TOOLS</div>
          <button>⌘ Terminal</button>
          <button>✓ Tests</button>
        </div>

        <div className="sidebar-bottom">
          <button>⚙ Settings</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span>
            {projectPath ? projectPath : "LOCAL"}
          </span>

          <div className="status">
            <span className="status-dot" />
            Ready
          </div>
        </header>

        <section className="welcome">
          <div className="hero-mark">◇</div>

          <h1>
            {projectPath
              ? "Project opened"
              : "Welcome to CodeForge"}
          </h1>

          <p>
            {projectPath
              ? projectPath
              : "Your local AI coding agent."}
            <br />
            Open source. Local-first.
          </p>

          <button
            className="open-project"
            onClick={openProject}
          >
            {projectPath ? "Open Another Project" : "Open Project"}
          </button>

          <div className="chat-box">
            <span>Ask CodeForge anything...</span>
            <button>↑</button>
          </div>

          <div className="attach">
            <span>＋</span>
            Attach files
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;