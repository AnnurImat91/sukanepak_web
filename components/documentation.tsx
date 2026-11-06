"use client"

import { useEffect, useMemo, useState } from "react"

type Entry = { id: string; event_date: string; title: string; schedule: string; media_count: string; drive_url: string }

export function Documentation() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [query, setQuery] = useState("")
  const [schedule, setSchedule] = useState("Semua kegiatan")
  const [date, setDate] = useState("")
  useEffect(() => { fetch("/api/documentation").then((r) => r.ok ? r.json() : []).then(setEntries) }, [])
  const filtered = useMemo(() => entries.filter((entry) => `${entry.title} ${entry.schedule}`.toLowerCase().includes(query.toLowerCase()) && (schedule === "Semua kegiatan" || entry.schedule === schedule) && (!date || entry.event_date === date)), [entries, query, schedule, date])
  return <section id="documentation" className="documentation"><div className="documentation-inner"><div className="section-heading"><div><div className="section-kicker">/// OPEN ARCHIVE</div><h2>DOKUMENTASI<br/><em>TERBARU.</em></h2></div><p>Cari dokumentasi berdasarkan judul, tanggal, atau jadwal kegiatan. Satu klik membuka folder Google Drive.</p></div><div className="archive-filters"><input aria-label="Cari dokumentasi" placeholder="Cari kegiatan..." value={query} onChange={(e) => setQuery(e.target.value)} /><select aria-label="Filter kegiatan" value={schedule} onChange={(e) => setSchedule(e.target.value)}><option>Semua kegiatan</option>{["Kamis","Sabtu","Tournament","Padel","Villa","Tracking","Lainnya"].map((v) => <option key={v}>{v}</option>)}</select><input aria-label="Filter tanggal" type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div><div className="archive-grid">{filtered.map((item) => <article className="archive-card" key={item.id}><div className="archive-top"><span>{item.schedule}</span><span>{item.event_date}</span></div><h3>{item.title}</h3><div className="archive-bottom"><small>{item.media_count}</small><a href={item.drive_url} target="_blank" rel="noreferrer">Buka Drive ↗</a></div></article>)}{filtered.length === 0 && <p className="archive-empty">Belum ada dokumentasi yang cocok.</p>}</div><a className="button button-yellow archive-cta" href="/admin">Kelola dokumentasi <span>Admin CMS ↗</span></a></div></section>
}
