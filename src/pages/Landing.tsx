import { motion } from "framer-motion";
import { FileText, MessageSquare, Zap, Shield, Upload, Brain, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const features = [
  {
    icon: Upload,
    title: "Instant Upload",
    desc: "Drag & drop any PDF — books, research papers, contracts, manuals. We handle the rest.",
  },
  {
    icon: Brain,
    title: "AI Understanding",
    desc: "Advanced embeddings break your document into smart, searchable knowledge chunks.",
  },
  {
    icon: MessageSquare,
    title: "Natural Chat",
    desc: "Ask questions in plain language. Get precise answers with page references.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Powered by vector search — find answers across 1000+ page documents in seconds.",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    desc: "Your documents are encrypted and stored securely on Cloudflare R2 infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Smart Context",
    desc: "AI uses only relevant sections to answer — no hallucinations, just facts from your PDF.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Documazer
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">How it Works</a>
            <Link to="/sign-in">
              <Button variant="outline" size="sm" className="rounded-full">
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button size="sm" className="rounded-full text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Document Intelligence
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Chat with your{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              PDFs
            </span>
            <br />
            like never before
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Upload any document and get instant, intelligent answers.
            Documazer transforms static PDFs into interactive knowledge bases
            powered by cutting-edge AI.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base font-semibold text-primary-foreground shadow-lg"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Start for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base font-semibold"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-16 relative"
          >
            <div
              className="rounded-2xl border border-border/50 bg-card p-1 mx-auto max-w-4xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="rounded-xl bg-secondary/50 p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* PDF side */}
                  <div className="flex-1 rounded-xl bg-card border border-border p-6 min-h-[280px]">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">research_paper.pdf</span>
                    </div>
                    <div className="space-y-2">
                      {[85, 100, 70, 90, 60, 100, 45].map((w, i) => (
                        <div key={i} className="h-2.5 rounded-full bg-muted" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                    <div className="mt-6 space-y-2">
                      {[95, 80, 100, 55, 88].map((w, i) => (
                        <div key={i} className="h-2.5 rounded-full bg-muted" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                  {/* Chat side */}
                  <div className="flex-1 rounded-xl bg-card border border-border p-6 min-h-[280px] flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold">Chat</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-end">
                        <div className="px-4 py-2 rounded-2xl rounded-tr-sm text-sm text-primary-foreground max-w-[80%]" style={{ background: "var(--gradient-primary)" }}>
                          What are the key findings?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="px-4 py-2 rounded-2xl rounded-tl-sm bg-secondary text-sm text-secondary-foreground max-w-[80%]">
                          Based on the document, the three key findings are: improved accuracy by 34%, reduced latency...
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="px-4 py-2 rounded-2xl rounded-tr-sm text-sm text-primary-foreground max-w-[80%]" style={{ background: "var(--gradient-primary)" }}>
                          Which page mentions latency?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="px-4 py-2 rounded-2xl rounded-tl-sm bg-secondary text-sm text-secondary-foreground max-w-[80%]">
                          Page 12, Section 4.2 discusses latency improvements in detail.
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="flex-1 h-10 rounded-full bg-muted border border-border" />
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-30 blur-[100px]" style={{ background: "var(--gradient-primary)" }} />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Everything you need to{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                master your documents
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              From upload to insight in seconds. No complex setup, no learning curve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Three steps to{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
                brilliance
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Upload your PDF", desc: "Drag and drop any PDF file. We support documents up to 50MB with hundreds of pages." },
              { step: "02", title: "AI processes it", desc: "Our AI reads, understands, and indexes every page — creating a searchable knowledge graph." },
              { step: "03", title: "Start chatting", desc: "Ask questions naturally. Get accurate answers with exact page references from your document." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border/50"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent shrink-0" style={{ backgroundImage: "var(--gradient-primary)", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)" }} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to transform how you read PDFs?
          </h2>
          <p className="text-white/80 text-lg mb-8 relative">
            Join thousands of students and professionals using Documazer daily.
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 h-12 text-base font-semibold bg-white text-primary hover:bg-white/90 relative"
          >
            Get Started — It's Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <FileText className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Documazer</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Documazer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
