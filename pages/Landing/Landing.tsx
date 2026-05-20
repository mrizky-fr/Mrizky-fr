import React, { useEffect } from 'react';
import {
    CircleHelp,
    Coins,
    HandCoins,
    PieChart,
    ScanEye,
    ShieldCheck,
    Smartphone,
    Target,
    TrendingUp,
    Users,
} from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import './Landing.css';

type FaqItem = {
    question: string;
    answer: string;
    icon: React.ElementType;
};

type SummaryCard = {
    label: string;
    value: number;
    change: number;
    icon: React.ElementType;
};

const FAQ_ITEMS: FaqItem[] = [
    {
        question: 'Apa itu LazisNU?',
        answer:
            'LazisNU adalah lembaga amil zakat, infaq, dan shadaqah Nahdlatul Ulama yang menghimpun serta menyalurkan dana umat secara amanah.',
        icon: CircleHelp,
    },
    {
        question: 'Dana disalurkan untuk apa saja?',
        answer:
            'Dana disalurkan untuk program sosial, pendidikan, kesehatan, ekonomi umat, serta bantuan mustahiq yang membutuhkan.',
        icon: HandCoins,
    },
    {
        question: 'Bagaimana transparansi dan pelaporan dana?',
        answer:
            'Setiap perolehan dan penyaluran dicatat dalam sistem digital sehingga data mudah dipantau dan dipertanggungjawabkan.',
        icon: ScanEye,
    },
    {
        question: 'Siapa yang bisa ikut berkontribusi?',
        answer:
            'Masyarakat umum, warga Nahdliyin, komunitas, dan mitra dapat ikut berzakat, berinfaq, maupun bershadaqah melalui kanal resmi LazisNU.',
        icon: Users,
    },
];

const SUMMARY_CARDS: SummaryCard[] = [
    { label: 'Hasil Koin', value: 875000000, change: 12.4, icon: Coins },
    { label: 'Rata-rata Koin / Kotak', value: 425000, change: 4.8, icon: PieChart },
    { label: 'Pentasarufan', value: 642500000, change: 9.1, icon: HandCoins },
];

const CHART_DATA = [
    { name: 'Jan', value: 64000000 },
    { name: 'Feb', value: 68000000 },
    { name: 'Mar', value: 72000000 },
    { name: 'Apr', value: 70000000 },
    { name: 'Mei', value: 78000000 },
    { name: 'Jun', value: 81000000 },
    { name: 'Jul', value: 86000000 },
    { name: 'Agu', value: 90000000 },
    { name: 'Sep', value: 94000000 },
    { name: 'Okt', value: 96000000 },
    { name: 'Nov', value: 102000000 },
    { name: 'Des', value: 109000000 },
];

const formatRupiah = (value: number): string =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);

const Landing: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );

        const hiddenElements = document.querySelectorAll('.scroll-reveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <section id="home" className="home-hero-section">
                <div className="home-hero">
                    <div className="home-hero__content">
                        <div className="scroll-reveal opacity-0">
                            <p className="home-hero__subtitle-label">SISTEM MANAJEMEN INFAQ TERPADU</p>
                        </div>
                        <h1 className="home-hero__title scroll-reveal opacity-0" style={{ animationDelay: '100ms' }}>
                            Transparansi Zakat Untuk
                            <br />
                            Kesejahteraan Umat
                        </h1>
                        <p className="home-hero__description scroll-reveal opacity-0" style={{ animationDelay: '200ms' }}>
                            Amanah dalam setiap transaksi zakat, infaq, dan shadaqah. Pantau perolehan dan penyaluran dana
                            secara transparan bersama LazisNU Kab. Malang.
                        </p>
                        <div className="home-hero__actions scroll-reveal opacity-0" style={{ animationDelay: '300ms' }}>
                            <a href="#pentasyarufan" className="home-hero__button home-hero__button--primary">
                                <span>Pentasyarufan</span>
                            </a>
                            <a href="#faq" className="home-hero__button home-hero__button--secondary">
                                <span>Lebih Kenal LazisNU</span>
                            </a>
                        </div>
                    </div>
                    <div className="home-hero__spacer" aria-hidden="true" />
                </div>
            </section>

            <section className="home-benefits-section scroll-reveal opacity-0" aria-label="Keunggulan LazisNU">
                <div className="home-benefits-strip">
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <ShieldCheck size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Transparansi Dana</h3>
                            <p className="home-benefit-description">
                                Laporan perolehan dan penyaluran dana tercatat secara publik dan dapat dipantau.
                            </p>
                        </div>
                    </div>
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <Smartphone size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Digitalisasi NU</h3>
                            <p className="home-benefit-description">
                                Sistem manajemen zakat dan infaq modern yang dirancang untuk Nahdliyin.
                            </p>
                        </div>
                    </div>
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <Target size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Penyaluran Tepat Sasaran</h3>
                            <p className="home-benefit-description">
                                Dana disalurkan secara amanah kepada para mustahiq yang benar-benar membutuhkan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="pentasyarufan"
                className="home-analytics-section scroll-reveal opacity-0"
                aria-label="Analitik Pendapatan Koin Kecamatan"
            >
                <div className="home-analytics-shell">
                    <div className="home-analytics-header">
                        <h2 className="home-analytics-title">Pendapatan Koin Kecamatan</h2>
                        <p className="home-analytics-subtitle">Contoh data statis untuk tampilan landing page.</p>
                    </div>

                    <div className="home-analytics-cards">
                        {SUMMARY_CARDS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article key={item.label} className="home-analytics-card">
                                    <div className="home-analytics-card__body">
                                        <div className="home-analytics-card__icon-wrap">
                                            <Icon className="home-analytics-card__icon" />
                                        </div>
                                        <div className="home-analytics-card__content">
                                            <span className="home-analytics-card__label">{item.label}</span>
                                            <p className="home-analytics-card__value">{formatRupiah(item.value)}</p>
                                            <div className="home-analytics-card__trend home-analytics-card__trend--up">
                                                <TrendingUp className="home-analytics-card__trend-icon" />
                                                <span>+{item.change.toFixed(1)}% dari periode sebelumnya</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="home-analytics-chart-box">
                        <div className="home-analytics-chart__head">
                            <h3 className="home-analytics-chart__title">Pendapatan Koin</h3>
                            <p className="home-analytics-chart__desc">Data statis tahun berjalan.</p>
                        </div>
                        <div className="home-analytics-chart">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="landingPendapatanGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0C6650" stopOpacity={0.28} />
                                            <stop offset="95%" stopColor="#0C6650" stopOpacity={0.05} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                                    <YAxis hide />
                                    <Tooltip formatter={(value) => [formatRupiah(Number(value)), 'Pendapatan']} />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#0C6650"
                                        strokeWidth={2}
                                        fill="url(#landingPendapatanGradient)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="home-inquiry-section scroll-reveal opacity-0" aria-label="Pertanyaan Umum LazisNU">
                <div className="home-inquiry-shell">
                    <h2 className="home-inquiry-title">Pertanyaan Umum Tentang LazisNU</h2>
                    <p className="home-inquiry-description">FAQ singkat tentang LazisNU dan pengelolaan dana.</p>
                    <div className="home-inquiry-grid">
                        {FAQ_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article key={item.question} className="home-inquiry-card">
                                    <div className="home-inquiry-card__icon" aria-hidden="true">
                                        <Icon size={22} />
                                    </div>
                                    <div className="home-inquiry-card__copy">
                                        <h3 className="home-inquiry-card__title">{item.question}</h3>
                                        <p className="home-inquiry-card__description">{item.answer}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Landing;
