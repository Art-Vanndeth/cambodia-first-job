'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Heart,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const jobs = [
  { title: 'Junior Graphic Designer', company: 'Phnom Penh Creative Studio', location: 'Phnom Penh', type: 'Full-time', salary: '$300 – $500', tag: 'Design', logo: 'P', color: 'bg-[#e7f0ff] text-[#174ea6]' },
  { title: 'Marketing Intern', company: 'Mekong Digital', location: 'Phnom Penh · Hybrid', type: 'Internship', salary: '$150 – $250', tag: 'Marketing', logo: 'M', color: 'bg-[#e7f7ef] text-[#16805c]' },
  { title: 'Customer Support Officer', company: 'Sabay Services', location: 'Siem Reap', type: 'Full-time', salary: '$280 – $420', tag: 'Customer Service', logo: 'S', color: 'bg-[#fff0df] text-[#b45c09]' },
  { title: 'Junior Software Developer', company: 'Angkor Tech Lab', location: 'Phnom Penh · On-site', type: 'Full-time', salary: '$450 – $700', tag: 'Technology', logo: 'A', color: 'bg-[#f1e9ff] text-[#7140b6]' },
]

const categories = [
  ['Technology', '124 jobs', '▣'], ['Marketing & Sales', '98 jobs', '↗'], ['Design & Creative', '76 jobs', '✦'], ['Finance & Accounting', '63 jobs', '⌁'], ['Customer Service', '51 jobs', '◌'], ['Hospitality & Tourism', '45 jobs', '♢'],
]

export function FirstJobHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [saved, setSaved] = useState<string[]>([])
  const [toast, setToast] = useState('')
  const [lang, setLang] = useState<'EN' | 'ខ្មែរ'>('EN')

  const filteredJobs = useMemo(() => jobs.filter((job) => `${job.title} ${job.company} ${job.tag}`.toLowerCase().includes(query.toLowerCase())), [query])
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2600) }
  const toggleSave = (title: string) => setSaved((items) => items.includes(title) ? items.filter((item) => item !== title) : [...items, title])

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#12213a]">
      {toast && <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#132b55] px-5 py-3 text-sm font-semibold text-white shadow-xl"><CheckCircle2 className="size-4 text-[#72d39f]" /> {toast}</div>}
      <header className="border-b border-[#e4eaf2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Cambodia FirstJob home">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#164e9b] text-white shadow-sm"><BriefcaseBusiness className="size-5" /></div>
            <div><div className="text-[17px] font-extrabold tracking-[-0.02em] text-[#123d7a]">Cambodia FirstJob</div><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8291a8]">Your first step to your career</div></div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#53627a] lg:flex"><a href="#jobs" className="transition hover:text-[#164e9b]">Find a job</a><a href="#how-it-works" className="transition hover:text-[#164e9b]">How it works</a><a href="#employers" className="transition hover:text-[#164e9b]">For employers</a><a href="#about" className="transition hover:text-[#164e9b]">About us</a></nav>
          <div className="hidden items-center gap-3 lg:flex"><button onClick={() => setLang(lang === 'EN' ? 'ខ្មែរ' : 'EN')} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold text-[#53627a] hover:bg-[#f0f4fa]">{lang}<ChevronDown className="size-3.5" /></button><button onClick={() => notify('Sign in will connect to your backend API.')} className="rounded-lg px-4 py-2 text-sm font-bold text-[#164e9b] hover:bg-[#edf4ff]">Log in</button><button onClick={() => notify('Registration flow ready for backend connection.')} className="rounded-lg bg-[#164e9b] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#123d7a]">Create account</button></div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-[#e4eaf2] px-5 py-5 text-sm font-semibold lg:hidden"><a href="#jobs">Find a job</a><a href="#how-it-works">How it works</a><a href="#employers">For employers</a><button className="w-fit rounded-lg bg-[#164e9b] px-4 py-2 text-white" onClick={() => notify('Registration flow ready for backend connection.')}>Create account</button></nav>}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#edf4ff]">
          <div className="absolute -right-24 -top-24 size-80 rounded-full border-[38px] border-[#dceaff] opacity-70" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
            <div className="relative z-10"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cbdffb] bg-white px-3 py-1.5 text-xs font-bold text-[#2768ba]"><Sparkles className="size-3.5" /> Built for Cambodia&apos;s next generation</div><h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#102e5e] sm:text-5xl lg:text-[58px]">Start your career with <span className="text-[#16805c]">confidence.</span></h1><p className="mt-5 max-w-lg text-base leading-7 text-[#5c6c83]">Find legitimate internships and entry-level jobs from employers who believe in your potential.</p>
              <div className="mt-8 rounded-2xl bg-white p-2 shadow-[0_16px_45px_rgba(31,70,120,0.12)]"><div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]"><label className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] px-4 py-3"><Search className="size-5 text-[#8b9ab0]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Job title, keyword or company" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9aa8b9]" /></label><label className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] px-4 py-3"><MapPin className="size-5 text-[#8b9ab0]" /><select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-transparent text-sm text-[#66758b] outline-none"><option value="">All locations</option><option>Phnom Penh</option><option>Siem Reap</option><option>Battambang</option></select></label><button onClick={() => { document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' }); notify(`${filteredJobs.length} jobs found for you`) }} className="rounded-xl bg-[#164e9b] px-7 py-3 text-sm font-bold text-white hover:bg-[#123d7a]">Search jobs</button></div></div><div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#687a93]"><span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-[#16805c]" /> Verified employers</span><span className="flex items-center gap-1.5"><Users className="size-4 text-[#16805c]" /> 100% free for job seekers</span></div>
            </div>
            <div className="relative hidden min-h-[370px] lg:block"><div className="absolute right-8 top-5 h-72 w-72 rounded-[38%_62%_58%_42%] bg-[#d5e6ff]" /><div className="absolute right-24 top-20 w-80 rounded-3xl border border-white/80 bg-white p-5 shadow-[0_20px_45px_rgba(31,70,120,0.14)]"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex size-11 items-center justify-center rounded-xl bg-[#e7f0ff] font-extrabold text-[#174ea6]">P</div><div><div className="font-bold">Junior Designer</div><div className="text-xs text-[#7d8ca2]">Phnom Penh Creative</div></div></div><Heart className="size-4 text-[#95a3b5]" /></div><div className="mt-5 flex gap-2 text-[11px] font-semibold text-[#64748b]"><span className="rounded-md bg-[#f0f4f8] px-2 py-1">Full-time</span><span className="rounded-md bg-[#f0f4f8] px-2 py-1">$300 – $500</span></div><div className="mt-5 flex items-center justify-between border-t border-[#edf0f4] pt-4 text-xs"><span className="text-[#7d8ca2]">Posted 2 days ago</span><span className="font-bold text-[#164e9b]">View job →</span></div></div><div className="absolute bottom-4 left-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_15px_30px_rgba(31,70,120,0.13)]"><div className="flex size-9 items-center justify-center rounded-full bg-[#dff7eb] text-[#16805c]"><CheckCircle2 className="size-5" /></div><div><div className="text-sm font-bold">You&apos;re on your way!</div><div className="text-xs text-[#8291a8]">Build your future, one step at a time.</div></div></div></div>
          </div>
        </section>

        <section id="jobs" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16805c]">Explore opportunities</p><h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[#102e5e]">Jobs made for your first step</h2><p className="mt-2 text-[#718097]">Fresh opportunities from employers hiring junior talent.</p></div><button onClick={() => notify('Full job listing will connect to GET /api/v1/jobs.')} className="flex items-center gap-2 text-sm font-bold text-[#164e9b]">View all jobs <ArrowRight className="size-4" /></button></div><div className="mt-8 grid gap-4 md:grid-cols-2">{filteredJobs.map((job) => <article key={job.title} className="group rounded-2xl border border-[#e3eaf2] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#b9d1f2] hover:shadow-[0_12px_30px_rgba(31,70,120,0.08)]"><div className="flex items-start justify-between"><div className="flex gap-4"><div className={`flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold ${job.color}`}>{job.logo}</div><div><h3 className="font-bold text-[#1a3154]">{job.title}</h3><p className="mt-1 text-sm text-[#718097]">{job.company}</p></div></div><button onClick={() => toggleSave(job.title)} className="rounded-lg p-2 hover:bg-[#f0f4fa]" aria-label={`Save ${job.title}`}><Heart className={`size-5 ${saved.includes(job.title) ? 'fill-[#e35d6a] text-[#e35d6a]' : 'text-[#9aa8b9]'}`} /></button></div><div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-[#67768b]"><span className="flex items-center gap-1 rounded-md bg-[#f5f7fa] px-2.5 py-1.5"><MapPin className="size-3.5" />{job.location}</span><span className="rounded-md bg-[#f5f7fa] px-2.5 py-1.5">{job.type}</span><span className="rounded-md bg-[#f5f7fa] px-2.5 py-1.5">{job.salary}</span></div><div className="mt-5 flex items-center justify-between border-t border-[#edf0f4] pt-4"><span className="rounded-full bg-[#e9f7ef] px-2.5 py-1 text-[11px] font-bold text-[#16805c]">{job.tag}</span><button onClick={() => notify('Job detail ready for GET /api/v1/jobs/{id}.')} className="text-xs font-bold text-[#164e9b] opacity-80 group-hover:opacity-100">View details <ArrowRight className="ml-1 inline size-3.5" /></button></div></article>)}</div></section>

        <section className="border-y border-[#e4eaf2] bg-white"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16805c]">Find your direction</p><h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[#102e5e]">Explore popular categories</h2></div><div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map(([name, count, icon]) => <button key={name} onClick={() => { setQuery(name.split(' ')[0]); document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' }) }} className="rounded-2xl border border-[#e5ebf2] bg-[#fbfcfe] p-4 text-left transition hover:-translate-y-1 hover:border-[#b9d1f2] hover:bg-[#f4f8ff]"><div className="text-2xl text-[#164e9b]">{icon}</div><div className="mt-4 text-sm font-bold text-[#1a3154]">{name}</div><div className="mt-1 text-xs text-[#8491a3]">{count}</div></button>)}</div></div></section>

        <section id="how-it-works" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 lg:px-8"><div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16805c]">Simple steps</p><h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[#102e5e]">Your next chapter starts here</h2><p className="mt-4 leading-7 text-[#718097]">From creating your profile to landing your first opportunity, we make every step clear and less overwhelming.</p><button onClick={() => notify('Student registration will connect to POST /api/v1/auth/register.')} className="mt-7 rounded-lg bg-[#164e9b] px-5 py-3 text-sm font-bold text-white">Create your free profile <ArrowRight className="ml-2 inline size-4" /></button></div><div className="grid gap-4 sm:grid-cols-3">{[['01', 'Create your profile', 'Show employers what makes you unique.'], ['02', 'Discover the right fit', 'Search opportunities that match your goals.'], ['03', 'Take your first step', 'Apply with confidence and track your journey.']].map(([number, title, text]) => <div key={number} className="rounded-2xl border border-[#e3eaf2] bg-white p-5"><div className="flex size-9 items-center justify-center rounded-lg bg-[#e7f0ff] text-sm font-extrabold text-[#164e9b]">{number}</div><h3 className="mt-5 font-bold text-[#1a3154]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#7b899d]">{text}</p></div>)}</div></div></section>

        <section id="employers" className="scroll-mt-20 bg-[#123d7a]"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-14 sm:flex-row sm:items-center lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[0.15em] text-[#8ee0b5]">For employers</p><h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-white">Meet the next generation of talent.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#c9d8ee]">Reach motivated Cambodian students and graduates who are ready to learn, contribute, and grow with your team.</p></div><button onClick={() => notify('Employer registration will connect to POST /api/v1/auth/register/employer.')} className="shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#164e9b] hover:bg-[#eff6ff]">Post a job <ArrowRight className="ml-2 inline size-4" /></button></div></section>
      </main>
      <footer id="about" className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8"><div><div className="flex items-center gap-2 font-extrabold text-[#123d7a]"><div className="flex size-8 items-center justify-center rounded-lg bg-[#164e9b] text-white"><BriefcaseBusiness className="size-4" /></div> Cambodia FirstJob</div><p className="mt-4 max-w-xs text-sm leading-6 text-[#7b899d]">Helping Cambodia&apos;s young talent take their first step toward a meaningful career.</p></div><div><h3 className="text-sm font-bold text-[#1a3154]">For job seekers</h3><div className="mt-4 flex flex-col gap-3 text-sm text-[#718097]"><a href="#jobs" className="hover:text-[#164e9b]">Find a job</a><a href="#how-it-works" className="hover:text-[#164e9b]">Career guide</a><a href="#" onClick={() => notify('CV builder will connect to your student dashboard.')}>Build your CV</a></div></div><div><h3 className="text-sm font-bold text-[#1a3154]">For employers</h3><div className="mt-4 flex flex-col gap-3 text-sm text-[#718097]"><a href="#employers">Post a job</a><a href="#employers">Employer dashboard</a><a href="#">Hiring resources</a></div></div><div><h3 className="text-sm font-bold text-[#1a3154]">Company</h3><div className="mt-4 flex flex-col gap-3 text-sm text-[#718097]"><a href="#about">About us</a><a href="#">Contact us</a><a href="#">Privacy & terms</a></div></div></div><div className="border-t border-[#e4eaf2] px-5 py-5 text-center text-xs text-[#8a97a8]">© 2026 Cambodia FirstJob. Demo frontend — job data and authentication connect to the Spring Boot API.</div></footer>
    </div>
  )
}
