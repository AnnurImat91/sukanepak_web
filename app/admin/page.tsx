"use client"

import { useEffect, useState } from "react"

type Entry = { id: string; title: string; event_date: string; schedule: string; drive_url: string; media_count: string }
const blank = { title: "", event_date: "", schedule: "Kamis", drive_url: "", media_count: "" }

export default function AdminPage() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [form, setForm] = useState(blank)
  const [editing, setEditing] = useState<string | null>(null)
  const [key, setKey] = useState("")
  const [message, setMessage] = useState("Masukkan ADMIN_PANEL_KEY untuk mengelola archive.")
  const load = async () => { const response = await fetch("/api/documentation"); if (response.ok) setEntries(await response.json()) }
  useEffect(() => { load() }, [])
  const save = async () => {
    const response = await fetch("/api/documentation", { method: editing ? "PATCH" : "POST", headers: { "Content-Type": "application/json", "x-admin-key": key }, body: JSON.stringify(editing ? { id: editing, ...form } : form) })
    if (!response.ok) { setMessage("Gagal menyimpan. Periksa admin key dan format data."); return }
    setMessage(editing ? "Dokumentasi diperbarui." : "Dokumentasi dipublikasikan."); setForm(blank); setEditing(null); load()
  }
  const remove = async (id: string) => { if (!confirm("Hapus dokumentasi ini?")) return; const response = await fetch(`/api/documentation?id=${id}`, { method: "DELETE", headers: { "x-admin-key": key } }); setMessage(response.ok ? "Dokumentasi dihapus." : "Gagal menghapus."); load() }
  return <main className="admin-shell"><header className="admin-header"><a className="brand admin-brand" href="/">SUKA<span>NEPAK</span></a><a href="/" className="admin-back">← Kembali ke website</a></header><div className="admin-layout"><aside className="admin-sidebar"><div className="section-kicker">/// CMS CONSOLE</div><h1>Archive<br/><em>Desk.</em></h1><p>Kelola dokumentasi publik dengan operasi GET, POST, UPDATE, dan DELETE.</p><label className="admin-key">Admin panel key<input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="ADMIN_PANEL_KEY" /></label></aside><section className="admin-main"><div className="admin-main-heading"><div><div className="section-kicker">SUPABASE CONTENT</div><h2>{editing ? "Edit dokumentasi" : "Tambah dokumentasi"}</h2></div><span className="admin-status">● REST API / live</span></div><div className="admin-form"><label>Judul kegiatan<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Kamis Manis — Week 22" /></label><div className="admin-form-row"><label>Tanggal<input type="date" value={form.event_date} onChange={(e) => setForm({ ...form, event_date: e.target.value })} /></label><label>Jenis kegiatan<select value={form.schedule} onChange={(e) => setForm({ ...form, schedule: e.target.value })}>{["Kamis","Sabtu","Tournament","Padel","Villa","Tracking","Lainnya"].map((v) => <option key={v}>{v}</option>)}</select></label></div><label>Google Drive URL<input value={form.drive_url} onChange={(e) => setForm({ ...form, drive_url: e.target.value })} placeholder="https://drive.google.com/..." /></label><label>Ringkasan media<input value={form.media_count} onChange={(e) => setForm({ ...form, media_count: e.target.value })} placeholder="42 foto + 3 video" /></label><div className="admin-actions"><button className="admin-submit" onClick={save}>{editing ? "Simpan perubahan" : "Publish ke archive"} ↗</button>{editing && <button className="admin-cancel" onClick={() => { setEditing(null); setForm(blank) }}>Batal</button>}</div><p className="save-note" role="status">{message}</p></div><div className="entries-heading"><h3>Published archive</h3><span>{entries.length} entries</span></div><div className="entries-list">{entries.map((entry) => <article className="entry" key={entry.id}><div><span className="entry-type">{entry.schedule}</span><h3>{entry.title}</h3><small>{entry.event_date} · {entry.media_count}</small></div><div className="entry-actions"><a href={entry.drive_url} target="_blank" rel="noreferrer">Drive ↗</a><button onClick={() => { setEditing(entry.id); setForm({ title: entry.title, event_date: entry.event_date, schedule: entry.schedule, drive_url: entry.drive_url, media_count: entry.media_count }) }}>Edit</button><button onClick={() => remove(entry.id)}>Hapus</button></div></article>)}</div></section></div></main>
}
