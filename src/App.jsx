import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ymfchzqmehhbhdlzwvnu.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZmNoenFtZWhoYmhkbHp3dm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3OTczMTMsImV4cCI6MjA5NDM3MzMxM30.OjlsXBj5SrjpYiRFmlNqGjFpfSPvnjxn2CuZi4WKCPs";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const ADMIN = { email: "fernandanunescastro.adv@gmail.com", password: "Nanda654321" };

const Ico = ({ n, s = 16 }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 2, width: s, height: s, viewBox: "0 0 24 24" };
  const icons = {
    upload:   <svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    file:     <svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    logout:   <svg {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    plus:     <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    trash:    <svg {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
    search:   <svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    refresh:  <svg {...p}><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>,
    download: <svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    close:    <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    check:    <svg {...p} strokeWidth="2.5"><polyline points="20 6 9 12 4 9"/></svg>,
    lock:     <svg {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  };
  return <span style={{ display: "inline-flex", flexShrink: 0 }}>{icons[n]}</span>;
};

// FNC Monogram logo
const FNCLogo = ({ dark = false, size = 44 }) => (
  <div style={{
    width: size, height: size,
    background: dark ? "rgba(255,255,255,0.12)" : "#6B2737",
    borderRadius: 4,
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    <div style={{
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: size * 0.3,
      fontWeight: 400,
      color: dark ? "#B8A98A" : "#FAF9F7",
      letterSpacing: "0.08em",
      lineHeight: 1,
    }}>FNC</div>
  </div>
);

const BrandFull = ({ dark = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <FNCLogo dark={dark} size={38} />
    <div>
      <div style={{
        fontFamily: "'Times New Roman', Times, serif",
        fontSize: 14, fontWeight: 400, letterSpacing: "0.04em",
        color: dark ? "#FAF9F7" : "#3A2530", lineHeight: 1.2,
      }}>Fernanda Nunes Castro</div>
      <div style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
        color: dark ? "#B8A98A" : "#9A8880", marginTop: 2,
      }}>Assessoria Jurídica e Contábil</div>
    </div>
  </div>
);

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',Helvetica,sans-serif;background:#FAF9F7;min-height:100vh}
  :root{
    --wine:#6B2737; --wine-d:#3A2530; --copper:#B8A98A;
    --copper-d:#E8DDD0; --offwhite:#FAF9F7; --rosegray:#9A8880;
    --ink:#2A1A1F; --muted:#7A6870; --border:#DDD5CD; --white:#FFFFFF;
    --green:#2E6647; --green-d:#D0E8DA; --red:#8B2020; --red-d:#F0D8D8;
  }

  /* ── Login ── */
  .login-bg{min-height:100vh;display:flex;background:var(--offwhite)}
  .login-left{
    width:46%;background:var(--wine-d);
    display:flex;flex-direction:column;justify-content:center;align-items:center;
    padding:60px 48px;position:relative;overflow:hidden;
  }
  .login-left::before{content:'';position:absolute;bottom:-80px;left:-80px;width:320px;height:320px;border-radius:50%;border:60px solid rgba(184,169,138,0.08)}
  .login-left::after{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;border-radius:50%;border:40px solid rgba(184,169,138,0.06)}
  .login-left-inner{position:relative;z-index:1;text-align:center}
  .login-monogram{
    width:80px;height:80px;border-radius:6px;
    background:rgba(107,39,55,0.6);border:1px solid rgba(184,169,138,0.2);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    margin:0 auto 20px;
  }
  .login-monogram-text{
    font-family:'Times New Roman',Times,serif;
    font-size:24px;color:#B8A98A;letter-spacing:.12em;
  }
  .login-name{font-family:'Times New Roman',Times,serif;font-size:18px;color:#FAF9F7;letter-spacing:.04em;line-height:1.4;margin-bottom:4px}
  .login-tagline{font-size:10px;color:#9A8880;letter-spacing:.12em;text-transform:uppercase}
  .login-divider{width:40px;height:1px;background:#B8A98A;opacity:.5;margin:20px auto}
  .login-quote{font-size:12px;color:#9A8880;line-height:1.7;max-width:240px;font-style:italic}
  .login-right{flex:1;display:flex;flex-direction:column;justify-content:center;padding:60px 56px}
  .login-form-wrap{max-width:360px}
  .login-eyebrow{font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.12em;color:var(--copper);margin-bottom:12px}
  .login-h{font-family:'Times New Roman',Times,serif;font-size:26px;color:var(--ink);margin-bottom:6px;letter-spacing:.02em}
  .login-s{font-size:13px;color:var(--muted);margin-bottom:28px;line-height:1.6}

  /* ── Fields ── */
  .field{margin-bottom:16px}
  .field label{display:block;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:6px}
  .field input{width:100%;padding:11px 14px;border:1px solid var(--border);border-radius:3px;font-family:inherit;font-size:14px;color:var(--ink);background:var(--offwhite);outline:none;transition:border-color .15s}
  .field input:focus{border-color:var(--wine);background:var(--white)}

  /* ── Buttons ── */
  .btn{display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:3px;border:none;font-family:inherit;font-size:13px;font-weight:500;cursor:pointer;transition:all .15s;white-space:nowrap}
  .btn-primary{background:var(--wine);color:white}.btn-primary:hover{background:#551F2D}
  .btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--border)}.btn-ghost:hover{background:var(--copper-d);color:var(--ink)}
  .btn-danger{background:var(--red-d);color:var(--red)}.btn-danger:hover{background:#e8c8c8}
  .btn-full{width:100%;justify-content:center;padding:12px;font-size:14px}
  .btn:disabled{opacity:.4;cursor:default;pointer-events:none}
  .err{background:var(--red-d);color:var(--red);font-size:13px;padding:10px 14px;border-radius:3px;margin-top:10px}

  /* ── Header ── */
  .hdr{height:58px;background:var(--white);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 28px}
  .hdr-sep{width:1px;height:28px;background:var(--border);margin:0 4px}
  .pill{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:2px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.07em}
  .pill-a{background:var(--wine);color:white}
  .pill-u{background:var(--copper-d);color:var(--wine-d);border:1px solid var(--border)}
  .hdr-r{display:flex;align-items:center;gap:12px}
  .hdr-who{font-size:12px;color:var(--muted)}
  .ico-btn{background:none;border:none;cursor:pointer;color:var(--rosegray);display:flex;align-items:center;padding:6px;border-radius:3px;transition:color .15s}
  .ico-btn:hover{color:var(--ink)}

  /* ── Page ── */
  .page{max-width:1060px;margin:0 auto;padding:32px 28px}
  .page-hd{margin-bottom:28px;padding-bottom:18px;border-bottom:1px solid var(--border)}
  .page-eyebrow{font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.12em;color:var(--copper);margin-bottom:8px}
  .page-title{font-family:'Times New Roman',Times,serif;font-size:26px;color:var(--ink);letter-spacing:.02em}
  .page-sub{font-size:13px;color:var(--muted);margin-top:4px}

  /* ── Stats ── */
  .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px}
  .stat{background:var(--white);border:1px solid var(--border);border-radius:3px;padding:18px 22px}
  .stat-n{font-family:'Times New Roman',Times,serif;font-size:34px;color:var(--wine);line-height:1}
  .stat-l{font-size:11px;color:var(--muted);margin-top:4px;text-transform:uppercase;letter-spacing:.06em}

  /* ── Card / Table ── */
  .card{background:var(--white);border:1px solid var(--border);border-radius:3px;overflow:hidden}
  .card-hd{padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
  .card-title{font-size:12px;font-weight:600;color:var(--ink);text-transform:uppercase;letter-spacing:.07em}
  .srch{display:flex;align-items:center;gap:8px;background:var(--offwhite);border:1px solid var(--border);border-radius:3px;padding:7px 11px;color:var(--rosegray)}
  .srch input{border:none;background:transparent;font-family:inherit;font-size:13px;color:var(--ink);outline:none;width:200px}
  table{width:100%;border-collapse:collapse}
  th{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);padding:10px 18px;background:var(--offwhite);border-bottom:1px solid var(--border);text-align:left}
  td{padding:13px 18px;border-bottom:1px solid var(--border);font-size:13px;color:var(--ink);vertical-align:middle}
  tr:last-child td{border-bottom:none}
  tr:hover td{background:#F5F2EF}
  .acts{display:flex;gap:6px}
  .empty-row{padding:48px;text-align:center;color:var(--muted);font-size:13px}
  .status{display:inline-flex;align-items:center;gap:6px;font-size:12px}
  .dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
  .dot-g{background:var(--green)}.dot-x{background:var(--border)}
  .s-green{color:var(--green)}.s-gray{color:var(--muted)}

  /* ── Modal ── */
  .ov{position:fixed;inset:0;background:rgba(42,26,31,.5);display:grid;place-items:center;z-index:200;backdrop-filter:blur(4px);padding:20px}
  .modal{background:var(--white);border-radius:4px;width:100%;max-width:480px;box-shadow:0 24px 60px rgba(0,0,0,.2);overflow:hidden}
  .modal-hd{padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
  .modal-title{font-family:'Times New Roman',Times,serif;font-size:19px;color:var(--ink);letter-spacing:.02em}
  .modal-body{padding:24px}
  .modal-ft{padding:16px 24px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end}

  /* ── Drop zone ── */
  .drop{border:1.5px dashed var(--border);border-radius:3px;padding:28px 20px;text-align:center;cursor:pointer;transition:all .15s;background:var(--offwhite)}
  .drop:hover,.drop.drag{border-color:var(--wine);background:var(--copper-d)}
  .drop.ok{border-color:var(--green);background:var(--green-d)}
  .drop p{font-size:13px;color:var(--muted)}.drop strong{color:var(--ink)}
  .drop small{font-size:11px;color:var(--rosegray);display:block;margin-top:4px}

  /* ── Hero (user view) ── */
  .hero{background:var(--wine-d);border-radius:4px;padding:36px 40px;margin-bottom:20px;position:relative;overflow:hidden}
  .hero::before{content:'';position:absolute;right:-60px;top:-60px;width:240px;height:240px;border-radius:50%;border:50px solid rgba(184,169,138,0.07)}
  .hero-inner{position:relative;z-index:1;display:flex;align-items:center;gap:28px}
  .hero-ey{font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.12em;color:var(--copper);margin-bottom:8px}
  .hero-name{font-family:'Times New Roman',Times,serif;font-size:24px;color:#FAF9F7;margin-bottom:4px;letter-spacing:.02em}
  .hero-sub{font-size:12px;color:#9A8880}
  .rep-block{background:var(--white);border:1px solid var(--border);border-radius:3px;padding:26px 30px;display:flex;align-items:center;gap:18px}
  .rep-ico{width:48px;height:48px;background:var(--copper-d);border-radius:3px;display:grid;place-items:center;color:var(--wine);flex-shrink:0;border:1px solid var(--border)}
  .rep-name{font-size:14px;font-weight:600;color:var(--ink);margin-bottom:3px}
  .rep-date{font-size:12px;color:var(--muted)}
  .no-doc{background:var(--white);border:1px solid var(--border);border-radius:3px;padding:56px 20px;text-align:center}
  .no-doc-ico{color:var(--border);display:flex;justify-content:center;margin-bottom:12px}
  .no-doc-t{font-family:'Times New Roman',Times,serif;font-size:17px;color:var(--ink);margin-bottom:6px}
  .no-doc-s{font-size:13px;color:var(--muted)}
  .footer{text-align:center;padding:24px;font-size:10px;color:var(--rosegray);letter-spacing:.06em;text-transform:uppercase;border-top:1px solid var(--border);margin-top:36px}

  /* ── Toast ── */
  .toast{position:fixed;bottom:22px;right:22px;z-index:400;background:var(--wine-d);color:#FAF9F7;padding:12px 16px;border-radius:3px;font-size:13px;font-weight:500;display:flex;align-items:center;gap:8px;box-shadow:0 8px 32px rgba(0,0,0,.3);animation:tIn .2s ease;max-width:320px}
  .toast-ok{border-left:3px solid var(--green)}.toast-err{border-left:3px solid var(--red)}
  @keyframes tIn{from{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}
  .fhint{font-size:12px;color:var(--muted);margin-top:5px}
  .cur-report{background:var(--offwhite);border:1px solid var(--border);border-radius:3px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--muted)}
`;

function Toast({ msg, type, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3500); return () => clearTimeout(t); }, []);
  return <div className={`toast toast-${type}`}><Ico n={type === "ok" ? "check" : "close"} />{msg}</div>;
}

function DropZone({ file, onFile }) {
  const [drag, setDrag] = useState(false);
  const ref = useRef();
  const handle = (f) => { if (f) onFile(f); };
  return (
    <div className={`drop${drag ? " drag" : ""}${file ? " ok" : ""}`}
      onClick={() => ref.current.click()}
      onDragOver={e => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={e => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files[0]); }}>
      <input ref={ref} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={e => handle(e.target.files[0])} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 10, color: file ? "var(--green)" : "var(--rosegray)" }}>
        <Ico n={file ? "check" : "upload"} s={24} />
      </div>
      {file ? <p><strong>{file.name}</strong></p> : <p><strong>Clique para selecionar</strong> ou arraste aqui</p>}
      <small>PDF, DOC ou DOCX</small>
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setErr(""); setLoading(true);
    if (email === ADMIN.email && pass === ADMIN.password) { setLoading(false); onLogin({ type: "admin" }); return; }
    const { data, error } = await supabase.from("usuarios").select("*").eq("email", email).eq("senha", pass).single();
    setLoading(false);
    if (error || !data) { setErr("E-mail ou senha incorretos."); return; }
    onLogin({ type: "user", user: data });
  };

  return (
    <div className="login-bg">
      <div className="login-left">
        <div className="login-left-inner">
          <div className="login-monogram"><div className="login-monogram-text">FNC</div></div>
          <div className="login-name">Fernanda Nunes Castro</div>
          <div className="login-tagline">Assessoria Jurídica e Contábil</div>
          <div className="login-divider" />
          <div className="login-quote">Portal de acesso exclusivo a relatórios e documentos personalizados.</div>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-wrap">
          <div className="login-eyebrow">Área restrita</div>
          <div className="login-h">Acesso ao portal</div>
          <div className="login-s">Entre com suas credenciais para acessar seus documentos.</div>
          <div className="field"><label>E-mail</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" onKeyDown={e => e.key === "Enter" && submit()} /></div>
          <div className="field"><label>Senha</label><input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" onKeyDown={e => e.key === "Enter" && submit()} /></div>
          {err && <div className="err">{err}</div>}
          <div style={{ marginTop: 22 }}>
            <button className="btn btn-primary btn-full" onClick={submit} disabled={loading}>
              <Ico n="lock" s={14} />{loading ? "Entrando…" : "Entrar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPage({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const toast$ = (msg, type = "ok") => setToast({ msg, type });

  const fetchUsers = async () => {
    setLoadingUsers(true);
    const { data } = await supabase.from("usuarios").select("*, relatorios(*)").order("nome");
    setUsers(data || []);
    setLoadingUsers(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const filtered = users.filter(u =>
    u.nome.toLowerCase().includes(q.toLowerCase()) ||
    u.email.toLowerCase().includes(q.toLowerCase())
  );
  const withReport = users.filter(u => u.relatorios?.length > 0).length;

  const addUser = async () => {
    if (!form.nome || !form.email || !form.senha) return;
    const { error } = await supabase.from("usuarios").insert({ nome: form.nome, email: form.email, senha: form.senha });
    if (error) { toast$(error.message.includes("unique") ? "E-mail já cadastrado." : "Erro ao cadastrar.", "err"); return; }
    await fetchUsers();
    setModal(null); setForm({ nome: "", email: "", senha: "" });
    toast$(`${form.nome} cadastrado(a) com sucesso!`);
  };

  const uploadReport = async () => {
    if (!file) return;
    setSaving(true);
    const path = `${modal.user.id}/${Date.now()}_${file.name}`;
    const { error: upErr } = await supabase.storage.from("relatorios").upload(path, file, { upsert: true });
    if (upErr) { toast$("Erro no upload: " + upErr.message, "err"); setSaving(false); return; }
    await supabase.from("relatorios").delete().eq("usuario_id", modal.user.id);
    await supabase.from("relatorios").insert({ usuario_id: modal.user.id, nome_arquivo: file.name, caminho_arquivo: path, atualizado_em: new Date().toISOString() });
    await fetchUsers();
    setSaving(false); setModal(null); setFile(null);
    toast$("Relatório enviado com sucesso!");
  };

  const deleteUser = async () => {
    const u = modal.user;
    if (u.relatorios?.[0]) await supabase.storage.from("relatorios").remove([u.relatorios[0].caminho_arquivo]);
    await supabase.from("usuarios").delete().eq("id", u.id);
    await fetchUsers();
    toast$(`${u.nome} removido(a).`); setModal(null);
  };

  const removeReport = async (u) => {
    if (u.relatorios?.[0]) await supabase.storage.from("relatorios").remove([u.relatorios[0].caminho_arquivo]);
    await supabase.from("relatorios").delete().eq("usuario_id", u.id);
    await fetchUsers();
    toast$("Relatório removido.");
  };

  return (
    <>
      <header className="hdr">
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <BrandFull />
          <div className="hdr-sep" />
          <span className="pill pill-a">Admin</span>
        </div>
        <div className="hdr-r">
          <span className="hdr-who">{ADMIN.email}</span>
          <button className="ico-btn" onClick={onLogout}><Ico n="logout" /></button>
        </div>
      </header>
      <div className="page">
        <div className="page-hd">
          <div className="page-eyebrow">Painel de gestão</div>
          <div className="page-title">Relatórios dos Clientes</div>
          <div className="page-sub">Gerencie o acesso e os documentos de cada cliente</div>
        </div>
        <div className="stats">
          <div className="stat"><div className="stat-n">{users.length}</div><div className="stat-l">Clientes cadastrados</div></div>
          <div className="stat"><div className="stat-n">{withReport}</div><div className="stat-l">Com relatório ativo</div></div>
          <div className="stat"><div className="stat-n">{users.length - withReport}</div><div className="stat-l">Aguardando relatório</div></div>
        </div>
        <div className="card">
          <div className="card-hd">
            <span className="card-title">Clientes</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <div className="srch"><Ico n="search" /><input placeholder="Buscar…" value={q} onChange={e => setQ(e.target.value)} /></div>
              <button className="btn btn-primary" onClick={() => { setForm({ nome: "", email: "", senha: "" }); setModal({ type: "add" }); }}><Ico n="plus" />Novo cliente</button>
            </div>
          </div>
          <table>
            <thead><tr><th>Nome</th><th>E-mail</th><th>Relatório</th><th>Atualizado em</th><th>Ações</th></tr></thead>
            <tbody>
              {loadingUsers && <tr><td colSpan={5}><div className="empty-row">Carregando…</div></td></tr>}
              {!loadingUsers && filtered.length === 0 && <tr><td colSpan={5}><div className="empty-row">Nenhum cliente encontrado.</div></td></tr>}
              {filtered.map(u => {
                const rel = u.relatorios?.[0];
                return (
                  <tr key={u.id}>
                    <td><strong>{u.nome}</strong></td>
                    <td style={{ color: "var(--muted)" }}>{u.email}</td>
                    <td>{rel ? <span className="status s-green"><span className="dot dot-g" />{rel.nome_arquivo}</span> : <span className="status s-gray"><span className="dot dot-x" />Sem relatório</span>}</td>
                    <td style={{ color: "var(--muted)" }}>{rel ? new Date(rel.atualizado_em).toLocaleDateString("pt-BR") : "—"}</td>
                    <td>
                      <div className="acts">
                        <button className="btn btn-ghost" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => { setFile(null); setModal({ type: "upload", user: u }); }}>
                          {rel ? <><Ico n="refresh" /> Trocar</> : <><Ico n="upload" /> Enviar</>}
                        </button>
                        {rel && <button className="btn btn-danger" style={{ padding: "6px 10px" }} onClick={() => removeReport(u)}><Ico n="trash" /></button>}
                        <button className="btn btn-danger" style={{ padding: "6px 10px" }} onClick={() => setModal({ type: "del", user: u })}><Ico n="trash" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="footer">Fernanda Nunes Castro — Assessoria Jurídica e Contábil</div>
      </div>

      {modal?.type === "add" && (
        <div className="ov" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-hd"><span className="modal-title">Novo cliente</span><button className="ico-btn" onClick={() => setModal(null)}><Ico n="close" /></button></div>
            <div className="modal-body">
              <div className="field"><label>Nome completo</label><input value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} placeholder="Ex: João Silva" /></div>
              <div className="field"><label>E-mail</label><input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="joao@exemplo.com" /></div>
              <div className="field"><label>Senha de acesso</label><input type="text" value={form.senha} onChange={e => setForm(f => ({ ...f, senha: e.target.value }))} placeholder="Crie uma senha" /><div className="fhint">O cliente usará esta senha para acessar o portal.</div></div>
            </div>
            <div className="modal-ft">
              <button className="btn btn-ghost" onClick={() => setModal(null)}>Cancelar</button>
              <button className="btn btn-primary" onClick={addUser} disabled={!form.nome || !form.email || !form.senha}>Cadastrar cliente</button>
            </div>
          </div>
        </div>
      )}

      {modal?.type === "upload" && (
        <div className="ov" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-hd"><span className="modal-title">{modal.user.relatorios?.[0] ? "Trocar relatório" : "Enviar relatório"}</span><button className="ico-btn" onClick={() => setModal(null)}><Ico n="close" /></button></div>
            <div className="modal-body">
              <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>Cliente: <strong style={{ color: "var(--ink)" }}>{modal.user.nome}</strong></p>
              {modal.user.relatorios?.[0] && <div className="cur-report">Atual: <strong style={{ color: "var(--ink)" }}>{modal.user.relatorios[0].nome_arquivo}</strong></div>}
              <DropZone file={file} onFile={setFile} />
            </div>
            <div className="modal-ft">
              <button className="btn btn-ghost" onClick={() => setModal(null)}>Cancelar</button>
              <button className="btn btn-primary" onClick={uploadReport} disabled={!file || saving}>{saving ? "Enviando…" : "Confirmar envio"}</button>
            </div>
          </div>
        </div>
      )}

      {modal?.type === "del" && (
        <div className="ov" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-hd"><span className="modal-title">Remover cliente</span><button className="ico-btn" onClick={() => setModal(null)}><Ico n="close" /></button></div>
            <div className="modal-body">
              <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7 }}>Tem certeza que deseja remover <strong>{modal.user.nome}</strong>?</p>
              <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>Esta ação não pode ser desfeita.</p>
            </div>
            <div className="modal-ft">
              <button className="btn btn-ghost" onClick={() => setModal(null)}>Cancelar</button>
              <button className="btn btn-danger" onClick={deleteUser}>Confirmar remoção</button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}

function UserPage({ user, onLogout }) {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("relatorios").select("*").eq("usuario_id", user.id).single();
      setReport(data || null);
      setLoading(false);
    })();
  }, []);

  const download = async () => {
    if (!report) return;
    const { data } = await supabase.storage.from("relatorios").createSignedUrl(report.caminho_arquivo, 60);
    if (data?.signedUrl) window.open(data.signedUrl, "_blank");
  };

  return (
    <>
      <header className="hdr">
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <BrandFull />
          <div className="hdr-sep" />
          <span className="pill pill-u">Área do cliente</span>
        </div>
        <div className="hdr-r">
          <span className="hdr-who">{user.email}</span>
          <button className="ico-btn" onClick={onLogout}><Ico n="logout" /></button>
        </div>
      </header>
      <div className="page">
        <div className="hero">
          <div className="hero-inner">
            <FNCLogo dark size={56} />
            <div>
              <div className="hero-ey">Bem-vindo(a) ao portal</div>
              <div className="hero-name">{user.nome}</div>
              <div className="hero-sub">Fernanda Nunes Castro — Assessoria Jurídica e Contábil</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)", marginBottom: 12 }}>Seu relatório</div>
          {loading ? (
            <div className="no-doc"><div className="no-doc-s">Carregando…</div></div>
          ) : report ? (
            <div className="rep-block">
              <div className="rep-ico"><Ico n="file" s={20} /></div>
              <div>
                <div className="rep-name">{report.nome_arquivo}</div>
                <div className="rep-date">Disponibilizado em {new Date(report.atualizado_em).toLocaleDateString("pt-BR")}</div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <button className="btn btn-primary" onClick={download}><Ico n="download" s={14} /> Baixar documento</button>
              </div>
            </div>
          ) : (
            <div className="no-doc">
              <div className="no-doc-ico"><Ico n="file" s={44} /></div>
              <div className="no-doc-t">Nenhum documento disponível</div>
              <div className="no-doc-s">Seu relatório ainda não foi disponibilizado. Entre em contato com o escritório.</div>
            </div>
          )}
        </div>
        <div className="footer">Fernanda Nunes Castro — Assessoria Jurídica e Contábil</div>
      </div>
    </>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  return (
    <>
      <style>{CSS}</style>
      {!session
        ? <LoginPage onLogin={setSession} />
        : session.type === "admin"
          ? <AdminPage onLogout={() => setSession(null)} />
          : <UserPage user={session.user} onLogout={() => setSession(null)} />
      }
    </>
  );
}
