export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'chatai-wizard-prompt-探索人工智能对话模型的创造力-与人工智能对话，探索无限可能',
  description: '为你提供各类prompt',
  keywords:
    'ChatGPT,chatai-wizard-prompt, 人工智能对话, 人工智能模型, 机器学习, 自然语言处理, 对话生成, AI应用',
  navItems: [
    {
      label: 'Prompt',
      href: '/prompt'
    },
    // {
    //   label: 'Nav',
    //   href: '/nav'
    // },
    // {
    //   label: 'Blog',
    //   href: '/blog'
    // },
    {
      label: 'About',
      href: '/about'
    }
  ],
  navMenuItems: [
    {
      label: 'Prompt',
      href: '/prompt'
    },
    // {
    //   label: 'Nav',
    //   href: '/nav'
    // },
    // {
    //   label: 'Blog',
    //   href: '/blog'
    // },
    {
      label: 'About',
      href: '/about'
    }
  ],
  Shortcut: [
    {
      label: 'Type',
      href: '#Type'
    },
    {
      label: 'Precautions',
      href: '#Precautions'
    },
    {
      label: 'FutureOutlook',
      href: '#FutureOutlook'
    }
  ],
  links: {
    github: 'https://github.com/shuang54/prompt-web',
    twitter: '',
    docs: '',
    discord: '',
    sponsor: 'https://patreon.com/chataiwizard'
  },
  ShowList: [
    {
      id: 1,
      en: {
        title: 'Fact prompts',
        content:
          "These types of prompts require ChatGPT to generate factual text, such as describing an event, introducing a concept or a person. For example, 'Write an article about Chinese history.'"
      },
      zh: {
        title: '事实提示',
        content: '写一篇关于中国历史的文章'
      }
    },
    {
      id: 2,
      en: {
        title: 'Creative prompts',
        content:
          "These types of prompts require ChatGPT to generate creative text, such as writing a poem, creating a story, or composing a musical piece. For example, 'Write a poem about love.'"
      },
      zh: {
        title: '创造性提示',
        content: '写一首关于爱情的诗'
      }
    },
    {
      id: 3,
      en: {
        title: 'Question prompts',
        content:
          "These types of prompts require ChatGPT to answer a question. For example, 'What is the future of artificial intelligence?'"
      },
      zh: {
        title: '问题提示',
        content: '人工智能的未来是什么？'
      }
    },
    {
      id: 4,
      en: {
        title: 'Instruction prompts',
        content:
          "These types of prompts require ChatGPT to follow specific instructions. For example, 'Write an article about artificial intelligence, focusing on its advantages and disadvantages, based on your knowledge.'"
      },
      zh: {
        title: '指导提示',
        content:
          '用你的知识写一篇关于人工智能的文章，重点介绍人工智能的优势和劣势'
      }
    }
  ],
  ShowNote: [
    {
      id: 1,
      en: {
        title: 'Clarity',
        content:
          'Prompts should be as clear and concise as possible, avoiding vague or ambiguous wording.'
      },
      zh: {
        title: '清晰性',
        content: '提示应该尽可能清晰简洁，避免使用模糊或含义不明确的词语。'
      }
    },
    {
      id: 2,
      en: {
        title: 'Completeness',
        content:
          'Prompts should be as complete as possible, avoiding the omission of key information.'
      },
      zh: {
        title: '完整性',
        content: '提示应该尽可能完整，避免遗漏关键信息。'
      }
    },
    {
      id: 3,
      en: {
        title: 'Diversity',
        content:
          'You can try using different prompts to generate different text effects.'
      },
      zh: {
        title: '多样性',
        content: '可以尝试使用不同的提示，以生成不同的文本效果。'
      }
    },
    {
      id: 4,
      en: {
        title: 'Feedback',
        content:
          'You can provide feedback based on the generated text to help ChatGPT improve its text generation quality.'
      },
      zh: {
        title: '反馈',
        content:
          '可以根据 ChatGPT 生成的文本进行反馈，以帮助 ChatGPT 进一步提高生成质量。'
      }
    }
  ],
  FutureOutlook: [
    {
      id: 1,
      en: {
        title: 'Education',
        content:
          'Generate educational materials, provide explanations and guidance, offer personalized learning support, etc.'
      },
      zh: {
        title: '教育',
        content: '生成教学材料、答疑解惑、提供个性化学习指导等。'
      }
    },
    {
      id: 2,
      en: {
        title: 'Entertainment',
        content:
          'Generate stories, poems, music compositions, games, etc., for entertainment purposes.'
      },
      zh: {
        title: '娱乐',
        content: '生成故事、诗歌、音乐作品、游戏等，用于娱乐目的。'
      }
    },
    {
      id: 3,
      en: {
        title: 'Business',
        content:
          'Generate marketing copy, product descriptions, customer service content, etc., for business purposes.'
      },
      zh: {
        title: '商业',
        content: '生成营销文案、产品介绍、客户服务等，用于商业目的。'
      }
    },
    {
      id: 4,
      en: {
        title: 'Research',
        content:
          'Generate research reports, papers, books, etc., for research purposes.'
      },
      zh: {
        title: '研究',
        content: '生成研究报告、论文、书籍等，用于研究目的。'
      }
    }
  ]
}
