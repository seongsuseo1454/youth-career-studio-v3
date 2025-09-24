'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CareerState = {
  // 입력/산출 최소 필드(확장 가능)
  applicant?: { name: string; school?: string; grade?: string; contact?: string };
  greeting?: string;
  analysis?: { summary: string; recommendedPaths: string[] };
  experience?: { title: string; artifactUrl?: string };
  result?: { qrUrl?: string; shareUrl?: string };

  // 진행 상태
  steps: {
    consultant: boolean;
    greeting: boolean;
    card: boolean;
    analysis: boolean;
    experience: boolean;
    result: boolean;
  };

  setApplicant: (v: CareerState['applicant']) => void;
  setGreeting: (v: string) => void;
  setAnalysis: (v: CareerState['analysis']) => void;
  setExperience: (v: CareerState['experience']) => void;
  setResult: (v: CareerState['result']) => void;

  mark: (k: keyof CareerState['steps'], done?: boolean) => void;
  reset: () => void;
};

export const useCareerStore = create<CareerState>()(
  persist(
    (set) => ({
      steps: { consultant: false, greeting: false, card: false, analysis: false, experience: false, result: false },

      setApplicant: (applicant) => set((s) => ({ applicant, steps: { ...s.steps, card: true } })),
      setGreeting: (greeting) => set((s) => ({ greeting, steps: { ...s.steps, greeting: true } })),
      setAnalysis: (analysis) => set((s) => ({ analysis, steps: { ...s.steps, analysis: true } })),
      setExperience: (experience) => set((s) => ({ experience, steps: { ...s.steps, experience: true } })),
      setResult: (result) => set((s) => ({ result, steps: { ...s.steps, result: true } })),

      mark: (k, done = true) => set((s) => ({ steps: { ...s.steps, [k]: done } })),
      reset: () => set(() => ({
        applicant: undefined, greeting: undefined, analysis: undefined, experience: undefined, result: undefined,
        steps: { consultant: false, greeting: false, card: false, analysis: false, experience: false, result: false },
      })),
    }),
    { name: 'career-flow', partialize: (s) => s } // session/local 전환 가능
  )
);
