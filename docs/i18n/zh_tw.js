const zh_tw = {
    nav: {
        home: '首頁',
        frameworks: '框架',
        comparison: '比較',
        resources: '資源'
    },
    hero: {
        title: '產品框架指南',
        subtitle: '您的完整產品管理框架與方法論指南'
    },
    categories: {
        priority: {
            title: '優先級框架',
            description: '決定下一步開發內容的框架',
            examples: ['RICE 框架', 'MoSCoW 方法', '價值效益評估', '更多...']
        },
        discovery: {
            title: '探索框架',
            description: '理解用戶需求的框架',
            examples: ['工作待完成', '設計思考', '精實畫布', '更多...']
        },
        strategy: {
            title: '策略框架',
            description: '產品策略和願景的框架',
            examples: ['產品願景板', '商業模式畫布', '波特五力分析', '更多...']
        },
        metrics: {
            title: '指標框架',
            description: '衡量成功的框架',
            examples: ['HEART 框架', '海盜指標 (AARRR)', '北極星指標', '更多...']
        },
        development: {
            title: '開發框架',
            description: '建構產品的框架',
            examples: ['敏捷開發', '雙軌敏捷', 'Shape Up', '更多...']
        },
        growth: {
            title: '成長框架',
            description: '擴展產品的框架',
            examples: ['成長循環', '鉤子模型', 'ICE 框架', '更多...']
        }
    },
    about: {
        title: '關於本指南',
        description: '這份完整指南旨在幫助產品經理、設計師和開發人員理解並應用各種產品管理框架。每個框架都配有實際案例和互動式視覺化，使學習更容易且更具吸引力。',
        features: {
            charts: {
                title: '📊 互動圖表',
                description: '更好理解框架的視覺化呈現'
            },
            examples: {
                title: '💡 實際案例',
                description: '框架的實際應用案例'
            },
            comparisons: {
                title: '🔄 框架比較',
                description: '了解何時使用哪個框架'
            }
        }
    },
    resources: {
        title: '其他資源',
        books: {
            title: '書籍',
            items: [
                'Sprint 衝刺計畫 (Jake Knapp)',
                '精實產品實戰手冊',
                'Inspired 啟發 (Marty Cagan)',
                'Hooked 鉤癮效應 (Nir Eyal)',
                '持續探索習慣'
            ]
        },
        courses: {
            title: '線上課程',
            items: [
                '產品管理基礎',
                '設計思考認證',
                '敏捷產品開發',
                '成長型產品管理',
                '產品分析'
            ]
        },
        communities: {
            title: '社群',
            items: [
                '產品學院',
                'Mind the Product',
                'Product Hunt',
                '產品主導成長中心',
                '產品管理總部'
            ]
        }
    },
    frameworks: {
        rice: {
            title: 'RICE 框架',
            intro: '一個幫助團隊根據四個因素評估計劃的量化優先級框架。',
            formula: {
                title: 'RICE 分數公式',
                equation: 'RICE 分數 = (觸及人數 × 影響力 × 信心度) ÷ 工作量',
                notes: [
                    'RICE 分數越高 = 優先級越高',
                    '所有組件應使用一致的時間週期（如：每季度）',
                    '最終分數有助於客觀比較不同計劃'
                ]
            },
            components: {
                reach: {
                    title: 'R - 觸及人數',
                    description: '在特定時間內影響的人數/事件數',
                    example: '每月 500 位用戶'
                },
                impact: {
                    title: 'I - 影響力',
                    description: '對目標指標的影響（範圍：0.25-3）',
                    scale: [
                        '3.0 = 巨大影響',
                        '2.0 = 高度影響',
                        '1.0 = 中度影響',
                        '0.5 = 低度影響',
                        '0.25 = 最小影響'
                    ]
                },
                confidence: {
                    title: 'C - 信心度',
                    description: '對估算的信心程度',
                    scale: [
                        '100% = 高度信心',
                        '80% = 中度信心',
                        '50% = 低度信心'
                    ]
                },
                effort: {
                    title: 'E - 工作量',
                    description: '估計所需的人月數',
                    example: '2.5 人月'
                }
            }
        }
        // Add other frameworks here
    }
};
