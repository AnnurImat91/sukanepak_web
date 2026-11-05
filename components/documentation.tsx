const archives = [
  { date: "24 MEI 2025", title: "Kamis Manis — Week 21", type: "Mabar Kamis", count: "38 foto + 2 video", href: "https://drive.google.com/" },
  { date: "17 MEI 2025", title: "Saturday Rally Session", type: "Mabar Sabtu", count: "54 foto", href: "https://drive.google.com/" },
  { date: "03 MEI 2025", title: "Suka Nepak Open 2025", type: "Tournament", count: "120 foto + 8 video", href: "https://drive.google.com/" },
]

export function Documentation() {
  return <section id="documentation" className="documentation"><div className="documentation-inner"><div className="section-heading"><div><div className="section-kicker">/// OPEN ARCHIVE</div><h2>DOKUMENTASI<br/><em>TERBARU.</em></h2></div><p>Satu klik menuju folder Google Drive terbaru. Pilih jadwal rutin atau event spesial untuk membuka memori lama.</p></div><div className="archive-grid">{archives.map((item) => <article className="archive-card" key={item.title}><div className="archive-top"><span>{item.type}</span><span>{item.date}</span></div><h3>{item.title}</h3><div className="archive-bottom"><small>{item.count}</small><a href={item.href} target="_blank" rel="noreferrer">Buka Drive ↗</a></div></article>)}</div><a className="button button-yellow archive-cta" href="/admin">Kelola dokumentasi <span>Admin CMS ↗</span></a></div></section>
}
