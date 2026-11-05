"use client"

import { useState } from "react"

const initialEntries = [
  { title: "Kamis Manis — Week 21", date: "24 Mei 2025", schedule: "Kamis", link: "https://drive.google.com/", status: "Published" },
  { title: "Saturday Rally Session", date: "17 Mei 2025", schedule: "Sabtu", link: "https://drive.google.com/", status: "Published" },
  { title: "Suka Nepak Open 2025", date: "03 Mei 2025", schedule: "Tournament", link: "https://drive.google.com/", status: "Published" },
]

export default function AdminPage() {
  const [entries, setEntries] = useState(initialEntries)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({ title: "", date: "", schedule: "Kamis", link: "" })
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }))
  const addEntry = () => {
    if (!form.title || !form.date || !form.link) return
    setEntries([{ ...form, status: "Published" }, ...entries])
    setForm({ title: "", date: "", schedule: "Kamis", link: "" })
    setSaved(true)
  }

  return <main className="admin-shell"><header className="admin-header"><a className="brand admin-brand" href="/">SUKA<span>NEPAK</span></a><a href="/" className="admin-back">← Kembali ke website</a></header><div className="admin-layout"><aside className="admin-sidebar"><div className="section-kicker">/// CMS CONSOLE</div><h1>Archive<br/><em>Desk.</em></h1><p>Kelola satu pintu untuk dokumentasi komunitas yang akan dilihat publik.</p><div className="admin-nav"><b className="active">Documentation</b><b>Tournament moments</b><b>Community stats</b></div></aside><section className="admin-main"><div className="admin-main-heading"><div><div className="section-kicker">PUBLISH CENTER</div><h2>Tambah dokumentasi</h2></div><span className="admin-status">● Connected / draft mode</span></div><div className="admin-form"><label>Judul kegiatan<input value={form.title} onChange={(event) => update("title", event.target.value)} placeholder="Contoh: Mabar Kamis — Week 22" /></label><div className="admin-form-row"><label>Tanggal<input type="date" value={form.date} onChange={(event) => update("date", event.target.value)} /></label><label>Jenis kegiatan<select value={form.schedule} onChange={(event) => update("schedule", event.target.value)}><option>Kamis</option><option>Sabtu</option><option>Tournament</option><option>Padel</option><option>Villa</option><option>Tracking</option></select></label></div><label>Google Drive URL<input value={form.link} onChange={(event) => update("link", event.target.value)} placeholder="https://drive.google.com/..." /></label><button className="admin-submit" onClick={addEntry}>Publish ke archive ↗</button>{saved && <p className="save-note" role="status">Draft ditambahkan ke daftar publik.</p>}</div><div className="entries-heading"><h3>Published archive</h3><span>{entries.length} entries</span></div><div className="entries-list">{entries.map((entry) => <article className="entry" key={`${entry.title}-${entry.date}`}><div><span className="entry-type">{entry.schedule}</span><h4>{entry.title}</h4><small>{entry.date} · {entry.link.replace("https://", "")}</small></div><span className="entry-live">{entry.status}</span></article>)}</div></section></div></main>
}
