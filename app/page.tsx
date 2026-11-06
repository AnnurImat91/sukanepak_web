import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Activity } from "@/components/activity"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Documentation } from "@/components/documentation"
import { Footer } from "@/components/footer"

const stats = [
  ["250+", "ANGGOTA AKTIF"], ["480+", "MABAR TERLAKSANA"], ["18", "TURNAMEN"], ["06", "TAHUN BERDIRI"],
]

export default function Home() {
  return <main className="site-shell"><Navbar /><Hero /><section className="scoreboard" aria-label="Statistik komunitas"><div className="section-kicker">/// THE NUMBERS GAME</div><div className="stats-grid">{stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section><About /><Activity /><Gallery /><section className="hall" id="tournament"><div className="section-heading"><div><div className="section-kicker">/// TOURNAMENT FILES</div><h2>HALL OF <em>FAME</em></h2></div><p>Menang, kalah, lalu kembali main. Ini cerita kami di luar sesi rutin.</p></div><div className="hall-grid"><article className="trophy-card"><span className="patch">SN<br/>2024</span><div><div className="rank">01 / JUARA</div><h3>Suka Nepak Open</h3><p>Ganda putra · Bandung</p></div><b>CHAMPIONS</b></article><article className="timeline"><div><span>2022</span><p>Komunitas lahir dari satu grup WhatsApp.</p></div><div><span>2023</span><p>Turnamen internal pertama dan 100 anggota.</p></div><div><span>2024</span><p>Suka Nepak Open: makin besar, makin seru.</p></div></article></div></section><Documentation /><Contact /><Footer /></main>
}
