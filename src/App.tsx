/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Calculator,
  ExternalLink,
  Dna,
  ArrowRight,
  Copy,
  Check,
  Compass,
  Layers,
  Sparkles,
  Github,
} from 'lucide-react';
import { G25_TOOLS } from './data';

export default function App() {
  const [copiedFormat, setCopiedFormat] = useState(false);
  const sampleCoordinate =
    'Sample_Target,0.1252,0.1341,0.0512,0.0215,0.0382,0.0118,0.0042,0.0075,0.0126,0.0158,-0.0041,0.0053,-0.0112,-0.0076,0.0182,0.0031,-0.0089,0.0028,0.0047,-0.0032,0.0058,0.0019,-0.0027,0.0094,-0.0018';

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCoordinate);
    setCopiedFormat(true);
    setTimeout(() => setCopiedFormat(false), 2000);
  };

  return (
    <div
      id="hubg25-root"
      className="min-h-screen bg-[#0f1724] text-slate-100 flex flex-col justify-between selection:bg-[#3ec59d]/30 selection:text-[#47d1b3]"
    >
      {/* Background ambient subtle glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3ec59d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[#1e293b]/40 rounded-full blur-3xl" />
      </div>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-16 flex flex-col items-center">
        
        {/* Header Block in the authentic UI style */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-xl text-center mb-8"
        >
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182335] border border-[#26374f] text-[#47d1b3] text-xs font-semibold tracking-wide mb-4">
            <Dna className="w-3.5 h-3.5 text-[#3ec59d]" />
            <span>GLOBAL 25 SUITE</span>
          </div>

          {/* Title - matching screenshot's "G25 Genetic Mapper" typography */}
          <h1
            id="main-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2"
          >
            Hub<span className="text-[#47d1b3]">G25</span>
          </h1>

          {/* Subtitle */}
          <p
            id="main-subtitle"
            className="text-base sm:text-lg font-medium text-[#8496ab] mb-3"
          >
            G25 tools aggregator
          </p>

          <p className="text-xs sm:text-sm text-[#62778f] max-w-md mx-auto leading-relaxed">
            Direct access to spatial genetic surface mapping, Euclidean distance
            matrices, and admixture modeling.
          </p>
        </motion.div>

        {/* Primary Card - Styled identical to the panel in the reference image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-2xl bg-[#151e2e] border border-[#223147] rounded-2xl p-5 sm:p-7 shadow-2xl shadow-black/40 backdrop-blur-sm"
        >
          {/* Quick Hub Navigation Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              </span>
              <span className="text-[11px] font-semibold text-[#47d1b3] flex items-center gap-1">
              </span>
            </div>

            {/* Two Main Tool Cards / Direct Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Tool 1: Genetic Mapper */}
              <div
                id="card-mapping"
                className="group relative flex flex-col justify-between bg-[#182335] hover:bg-[#1c293d] border border-[#26374f] hover:border-[#3ec59d]/60 rounded-xl p-4 sm:p-5 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3ec59d]/15 border border-[#3ec59d]/30 flex items-center justify-center text-[#3ec59d]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#131b29] text-[#7187a1] border border-[#223046]">
                      MAPPING
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-[#47d1b3] transition-colors mb-1">
                    Genetic Mapper
                  </h2>
                  <p className="text-xs text-[#8295ab] leading-relaxed mb-4">
                    Place reference populations, choose a source, and render a
                    genetic-distance or admixture surface clipped to land.
                  </p>
                </div>

                {/* Primary Teal Button matching image style */}
                <a
                  id="btn-mapping"
                  href="https://hubg25.github.io/HubG25/mapping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3ec59d] hover:bg-[#48d7ac] active:scale-[0.98] text-[#0c1c19] text-sm font-bold shadow-md shadow-[#3ec59d]/20 transition-all duration-150"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Genetic Mapper</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-75" />
                </a>
              </div>

              {/* Tool 2: G25 Calculator */}
              <div
                id="card-calculator"
                className="group relative flex flex-col justify-between bg-[#182335] hover:bg-[#1c293d] border border-[#26374f] hover:border-slate-400/40 rounded-xl p-4 sm:p-5 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#24334a] border border-[#334663] flex items-center justify-center text-slate-200">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#131b29] text-[#7187a1] border border-[#223046]">
                      CALCULATOR
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors mb-1">
                    G25 Calculator
                  </h2>
                  <p className="text-xs text-[#8295ab] leading-relaxed mb-4">
                    Run Euclidean genetic distance calculations, multi-source
                    ancestry modeling, and coordinate analysis.
                  </p>
                </div>

                {/* Secondary Sleek Dark Slate Button matching image style */}
                <a
                  id="btn-calculator"
                  href="https://hubg25.github.io/HubG25/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1f2b3e] hover:bg-[#27374e] active:scale-[0.98] border border-[#31435d] text-slate-100 text-sm font-semibold transition-all duration-150"
                >
                  <Calculator className="w-4 h-4 text-slate-300" />
                  <span>Open G25 Calculator</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-slate-400" />
                </a>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#223147] my-5" />

          {/* Target Format Reference Section (mirrors the reference screenshot's TARGET box) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5f758e]">
                COORDINATES FORMAT SPECIFICATION
              </span>
              <button
                id="btn-copy-format"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-xs text-[#47d1b3] hover:text-[#5ee3c6] transition-colors cursor-pointer"
                title="Copy sample coordinate line"
              >
                {copiedFormat ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span className="font-semibold text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy sample line</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-[#71859c] mb-2">
              Standard format: <code className="text-[#a5b9d0] bg-[#101724] px-1.5 py-0.5 rounded border border-[#212f43]">Name,c1,c2,...,c25</code>
            </p>

            <div className="bg-[#121a28] border border-[#202c3e] rounded-lg p-3 font-mono text-[11px] text-[#7e94ad] overflow-x-auto select-all leading-relaxed">
              Target,0.0123,-0.0456,0.0789,0.0234,-0.0122,0.0054,...
            </div>
          </div>
        </motion.div>

        {/* Direct Action Links Bar for quick navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#6e8299]"
        >
          <span>Direct URLs:</span>
          <a
            href="https://hubg25.github.io/HubG25/mapping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#47d1b3] hover:underline underline-offset-2"
          >
            hubg25.github.io/HubG25/mapping
          </a>
          <span>•</span>
          <a
            href="https://hubg25.github.io/HubG25/calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:underline underline-offset-2"
          >
            hubg25.github.io/HubG25/calculator
          </a>
        </motion.div>
      </main>

      {/* Sleek Footer */}
      <footer className="relative z-10 w-full border-t border-[#1a2538] py-5 px-4 text-center text-xs text-[#54687f]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">HubG25</span>
            <span>—</span>
            <span>Global 25 Genetic Population Aggregator</span>
          </div>
          <div className="flex items-center gap-4 text-[#6d8199]">
            <a
              href="https://github.com/HubG25/HubG25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
