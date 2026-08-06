const scholarUrl =
  "https://scholar.google.com/citations?user=e701V6YAAAAJ&hl=en";

const education: Array<{
  period: string;
  role: string;
  institution: string;
  mentors?: Array<{ label: string; names: string[] }>;
}> = [
  {
    period: "2025–Present",
    role: "Joint Postdoctoral Researcher",
    institution: "Tsinghua University & Li Auto Inc.",
    mentors: [
      { label: "Supervisors", names: ["Liang Li", "Wei Chen"] },
    ],
  },
  {
    period: "2019–2025",
    role: "Ph.D.",
    institution: "University of Science and Technology Beijing",
    mentors: [
      { label: "Advisor", names: ["Xu-Cheng Yin"] },
      { label: "Primary supervisor", names: ["Xinyuan Qian"] },
    ],
  },
  {
    period: "2015–2019",
    role: "Bachelor’s Studies",
    institution: "University of Science and Technology Beijing",
  },
];

type FeaturedPaper = {
  year: string;
  venue: string;
  title: string;
  authors: string;
  href: string;
  equalContributionAuthor?: string;
  citations?: string;
  theme?: string;
};

const featuredPapers: FeaturedPaper[] = [
  {
    year: "2025",
    venue: "Proceedings of AAAI",
    title:
      "FaceSpeak: Expressive and High-Quality Speech Synthesis from Human Portraits of Different Styles",
    authors: "T.-H. Zhang, J. Zhang, J. Wang, X. Qian, X.-C. Yin",
    citations: "5 citations",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:LkGwnXOMwfcC`,
    theme: "Multimodal TTS",
  },
  {
    year: "2024",
    venue: "Proceedings of ICASSP",
    title:
      "CIF-T: A Novel CIF-Based Transducer Architecture for Automatic Speech Recognition",
    authors: "T.-H. Zhang, D. Zhou, G. Zhong, J. Zhou, B. Li",
    equalContributionAuthor: "D. Zhou",
    citations: "11 citations",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:YsMSGLbcyi4C`,
    theme: "ASR",
  },
  {
    year: "2024",
    venue: "Proceedings of INTERSPEECH",
    title:
      "Transmitted and Aggregated Self-Attention for Automatic Speech Recognition",
    authors: "T.-H. Zhang, X. Qian, F. Chen, X.-C. Yin",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:Se3iqnhoufwC`,
  },
  {
    year: "2023",
    venue: "Proceedings of INTERSPEECH",
    title:
      "Rethinking Speech Recognition with a Multimodal Perspective via Acoustic and Semantic Cooperative Decoding",
    authors:
      "T.-H. Zhang, H.-B. Qin, Z.-H. Lai, S.-L. Chen, Q. Liu, F. Chen, X. Qian, X.-C. Yin",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:2osOgNQ5qMEC`,
  },
  {
    year: "2023",
    venue: "Proceedings of ICASSP",
    title: "Self-Convolution for Automatic Speech Recognition",
    authors:
      "T.-H. Zhang, Q. Liu, X. Qian, S.-L. Chen, F. Chen, X.-C. Yin",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:9yKSN-GCB0IC`,
  },
  {
    year: "2025",
    venue: "Proceedings of ICASSP",
    title:
      "Breaking Through the Spike: Spike Window Decoding for Accelerated and Precise Automatic Speech Recognition",
    authors:
      "W. Zhang, T.-H. Zhang, C. Luo, H. Zhou, C. Yang, X. Qian, X.-C. Yin",
    equalContributionAuthor: "T.-H. Zhang",
    href: "https://arxiv.org/abs/2501.03257",
  },
  {
    year: "2026",
    venue: "arXiv",
    title:
      "PALM-Bench: A Comprehensive Benchmark for Personalized Audio-Language Models",
    authors:
      "Y. Wang, X. Qian, T.-H. Zhang, J. Gao, Y. Pan, X. Wang, Z. Pan, C. Wei, Y. Wang",
    citations: "1 citation",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:5nxA0vEk-isC`,
    theme: "Speech LLM",
  },
  {
    year: "2024",
    venue: "Pattern Recognition Letters, 179, 158–164",
    title:
      "M3TTS: Multi-Modal Text-to-Speech of Multi-Scale Style Control for Dubbing",
    authors: "Y. Liu, L.-F. Wei, X. Qian, T.-H. Zhang, S.-L. Chen, X.-C. Yin",
    citations: "13 citations",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:Tyk-4Ss8FVUC`,
    theme: "Multimodal TTS",
  },
  {
    year: "2023",
    venue: "Proceedings of INTERSPEECH",
    title:
      "InterFormer: Interactive Local and Global Features Fusion for Automatic Speech Recognition",
    authors:
      "Z.-H. Lai, T.-H. Zhang, Q. Liu, X. Qian, L.-F. Wei, S.-L. Chen, F. Chen, X.-C. Yin",
    citations: "12 citations",
    href: `${scholarUrl}&view_op=view_citation&citation_for_view=e701V6YAAAAJ:qjMakFHDy7sC`,
    theme: "ASR",
  },
];

const moreWork = [
  {
    year: "2025",
    title:
      "I²TTS: Image-Indicated Immersive Text-to-Speech Synthesis with Spatial Perception",
    venue: "APSIPA ASC",
  },
  {
    year: "2024",
    title:
      "Improving Multi-Type License Plate Recognition via Learning Globally and Contrastively",
    venue: "IEEE T-ITS",
  },
  {
    year: "2023",
    title:
      "Self-Supervised Contrastive Speaker Verification with Nearest Neighbor Positive Instances",
    venue: "Pattern Recognition Letters",
  },
  {
    year: "2023",
    title: "Stable Speech Emotion Recognition with Head-k-Pooling Loss",
    venue: "INTERSPEECH",
  },
  {
    year: "2022",
    title:
      "Non-Autoregressive Transformer with Unified Bidirectional Decoder for Automatic Speech Recognition",
    venue: "ICASSP",
  },
];

function AuthorList({
  authors,
  equalContributionAuthor,
}: {
  authors: string;
  equalContributionAuthor?: string;
}) {
  return authors.split(", ").map((author, index) => (
    <span key={`${author}-${index}`}>
      {index > 0 && ", "}
      {author === "T.-H. Zhang" ? <strong>{author}</strong> : author}
      {author === equalContributionAuthor && (
        <sup className="equal-contribution-mark">*</sup>
      )}
    </span>
  ));
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="site-name" href="#top">Tian-Hao Zhang</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#publications">Publications</a>
          <a href={scholarUrl} target="_blank" rel="noreferrer">Scholar ↗</a>
        </nav>
      </header>
      <div className="accent-rule" aria-hidden="true" />

      <div className="page-shell">
        <div className="intro-grid">
          <section className="profile" id="about" aria-labelledby="profile-name">
            <div className="profile-identity">
              <img
                className="profile-photo"
                src="tianhao-zhang.jpg"
                alt="Tian-Hao Zhang's Google Scholar avatar"
                width="128"
                height="128"
              />
              <div className="profile-content">
                <h1 id="profile-name">Tian-Hao Zhang</h1>
                <p className="affiliation">Tsinghua University & Li Auto Inc.</p>
              </div>
            </div>
            <p className="biography">
              My research focuses on speech large language models, automatic
              speech recognition, and expressive speech synthesis. I am
              particularly interested in end-to-end speech large language
              models and in connecting acoustic information with language and
              multimodal context. I previously interned at Baidu, SenseTime,
              and Tencent.
            </p>
            <div className="profile-links">
              <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar</a>
              <span aria-hidden="true">·</span>
              <a href="#publications">Selected publications</a>
            </div>
          </section>

          <section className="academic-section education-section" id="education">
            <header className="section-header">
              <span>01</span>
              <h2>Education &amp; Appointments</h2>
            </header>
            <div className="education-list">
              {education.map((item) => (
                <div className="education-item" key={item.period}>
                  <span className="education-period">{item.period}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.institution}</p>
                    {item.mentors?.map((mentor) => (
                      <p className="education-mentor" key={mentor.label}>
                        <span>{mentor.label}:</span>{" "}
                        {mentor.names.map((name, index) => (
                          <span key={name}>
                            {index > 0 && " and "}
                            <strong>{name}</strong>
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="academic-section" id="publications">
          <header className="section-header publication-header">
            <span>02</span>
            <h2>Selected Publications</h2>
            <a href={scholarUrl} target="_blank" rel="noreferrer">Full list ↗</a>
          </header>

          <ol className="publication-list">
            {featuredPapers.map((paper, index) => (
              <li key={paper.title}>
                <span className="publication-number">[{index + 1}]</span>
                <div className="publication-content">
                  <p className="publication-venue">{paper.venue} · {paper.year}</p>
                  <h3>
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.title}
                    </a>
                  </h3>
                  <p className="publication-authors">
                    <AuthorList
                      authors={paper.authors}
                      equalContributionAuthor={paper.equalContributionAuthor}
                    />
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="publication-note">
            <sup className="equal-contribution-mark">*</sup> Equal contribution
          </p>
        </section>

        <section className="academic-section additional-work" aria-labelledby="additional-heading">
          <header className="section-header">
            <span>03</span>
            <h2 id="additional-heading">Additional Publications</h2>
          </header>
          <div className="additional-list">
            {moreWork.map((work) => (
              <div key={work.title}>
                <span>{work.year}</span>
                <p>{work.title}</p>
                <em>{work.venue}</em>
              </div>
            ))}
          </div>
          <a className="complete-link" href={scholarUrl} target="_blank" rel="noreferrer">
            View all 19 publications on Google Scholar ↗
          </a>
        </section>
      </div>

      <footer className="site-footer">
        <span>© 2026 Tian-Hao Zhang</span>
        <span>Speech LLM · ASR · TTS</span>
      </footer>
    </main>
  );
}
