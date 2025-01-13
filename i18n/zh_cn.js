const zh_cn = {
    nav: {
        home: '首页',
        frameworks: '框架',
        comparison: '比较',
        resources: '资源'
    },
    hero: {
        title: '产品框架指南',
        subtitle: '您的完整产品管理框架与方法论指南'
    },
    categories: {
        priority: {
            title: '优先级框架',
            description: '决定下一步开发内容的框架',
            examples: ['RICE 框架', 'MoSCoW 方法', '价值效益评估', '更多...']
        },
        discovery: {
            title: '探索框架',
            description: '理解用户需求的框架',
            examples: ['工作待完成', '设计思考', '精益画布', '更多...']
        },
        strategy: {
            title: '策略框架',
            description: '产品策略和愿景的框架',
            examples: ['产品愿景板', '商业模式画布', '波特五力分析', '更多...']
        },
        metrics: {
            title: '指标框架',
            description: '衡量成功的框架',
            examples: ['HEART 框架', '海盗指标 (AARRR)', '北极星指标', '更多...']
        },
        development: {
            title: '开发框架',
            description: '构建产品的框架',
            examples: ['敏捷开发', '双轨敏捷', 'Shape Up', '更多...']
        },
        growth: {
            title: '成长框架',
            description: '扩展产品的框架',
            examples: ['成长循环', '钩子模型', 'ICE 框架', '更多...']
        }
    },
    about: {
        title: '关于本指南',
        description: '这份完整指南旨在帮助产品经理、设计师和开发人员理解并应用各种产品管理框架。每个框架都配有实际案例和互动式可视化，使学习更容易且更具吸引力。',
        features: {
            charts: {
                title: '📊 互动图表',
                description: '更好理解框架的可视化呈现'
            },
            examples: {
                title: '💡 实际案例',
                description: '框架的实际应用案例'
            },
            comparisons: {
                title: '🔄 框架比较',
                description: '了解何时使用哪个框架'
            }
        }
    },
    resources: {
        title: '其他资源',
        books: {
            title: '书籍',
            items: [
                'Sprint 冲刺计划 (Jake Knapp)',
                '精益产品实战手册',
                'Inspired 启发 (Marty Cagan)',
                'Hooked 钩瘾效应 (Nir Eyal)',
                '持续探索习惯'
            ]
        },
        courses: {
            title: '在线课程',
            items: [
                '产品管理基础',
                '设计思考认证',
                '敏捷产品开发',
                '成长型产品管理',
                '产品分析'
            ]
        },
        communities: {
            title: '社群',
            items: [
                '产品学院',
                'Mind the Product',
                'Product Hunt',
                '产品主导成长中心',
                '产品管理总部'
            ]
        }
    },
    frameworks: {
        rice: {
            title: 'RICE 框架',
            intro: '一个帮助团队根据四个因素评估计划的量化优先级框架。',
            formula: {
                title: 'RICE 分数公式',
                equation: 'RICE 分数 = (触及人数 × 影响力 × 信心度) ÷ 工作量',
                notes: [
                    'RICE 分数越高 = 优先级越高',
                    '所有组件应使用一致的时间周期（如：每季度）',
                    '最终分数有助于客观比较不同计划'
                ]
            },
            components: {
                reach: {
                    title: 'R - 触及人数',
                    description: '在特定时间内影响的人数/事件数',
                    example: '每月 500 位用户'
                },
                impact: {
                    title: 'I - 影响力',
                    description: '对目标指标的影响（范围：0.25-3）',
                    scale: [
                        '3.0 = 巨大影响',
                        '2.0 = 高度影响',
                        '1.0 = 中度影响',
                        '0.5 = 低度影响',
                        '0.25 = 最小影响'
                    ]
                },
                confidence: {
                    title: 'C - 信心度',
                    description: '对估算的信心程度',
                    scale: [
                        '100% = 高度信心',
                        '80% = 中度信心',
                        '50% = 低度信心'
                    ]
                },
                effort: {
                    title: 'E - 工作量',
                    description: '估计所需的人月数',
                    example: '2.5 人月'
                }
            }
        }
        // Add other frameworks here
    }
};
