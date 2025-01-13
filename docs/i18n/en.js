const en = {
    nav: {
        home: 'Home',
        frameworks: 'Frameworks',
        comparison: 'Comparison',
        resources: 'Resources'
    },
    hero: {
        title: 'Product Framework Guide',
        subtitle: 'Your comprehensive guide to product management frameworks and methodologies'
    },
    categories: {
        priority: {
            title: 'Priority Frameworks',
            description: 'Frameworks for deciding what to build next',
            examples: ['RICE Framework', 'MoSCoW Method', 'Value vs Effort', 'And more...']
        },
        discovery: {
            title: 'Discovery Frameworks',
            description: 'Frameworks for understanding user needs',
            examples: ['Jobs To Be Done', 'Design Thinking', 'Lean Canvas', 'And more...']
        },
        strategy: {
            title: 'Strategy Frameworks',
            description: 'Frameworks for product strategy and vision',
            examples: ['Product Vision Board', 'Business Model Canvas', "Porter's Five Forces", 'And more...']
        },
        metrics: {
            title: 'Metrics Frameworks',
            description: 'Frameworks for measuring success',
            examples: ['HEART Framework', 'Pirate Metrics (AARRR)', 'North Star Framework', 'And more...']
        },
        development: {
            title: 'Development Frameworks',
            description: 'Frameworks for building products',
            examples: ['Agile Development', 'Dual-Track Agile', 'Shape Up', 'And more...']
        },
        growth: {
            title: 'Growth Frameworks',
            description: 'Frameworks for scaling products',
            examples: ['Growth Loop', 'Hook Model', 'ICE Framework', 'And more...']
        }
    },
    about: {
        title: 'About This Guide',
        description: 'This comprehensive guide is designed to help product managers, designers, and developers understand and apply various product management frameworks. Each framework is explained with practical examples and interactive visualizations to make learning easier and more engaging.',
        features: {
            charts: {
                title: '📊 Interactive Charts',
                description: 'Visual representations to better understand frameworks'
            },
            examples: {
                title: '💡 Practical Examples',
                description: 'Real-world applications of each framework'
            },
            comparisons: {
                title: '🔄 Framework Comparisons',
                description: 'Understanding when to use which framework'
            }
        }
    },
    resources: {
        title: 'Additional Resources',
        books: {
            title: 'Books',
            items: [
                'Sprint (Jake Knapp)',
                'Lean Product Playbook',
                'Inspired (Marty Cagan)',
                'Hooked (Nir Eyal)',
                'Continuous Discovery Habits'
            ]
        },
        courses: {
            title: 'Online Courses',
            items: [
                'Product Management Fundamentals',
                'Design Thinking Certification',
                'Agile Product Development',
                'Growth Product Management',
                'Product Analytics'
            ]
        },
        communities: {
            title: 'Communities',
            items: [
                'Product School',
                'Mind the Product',
                'Product Hunt',
                'Product-Led Growth Hub',
                'Product Management HQ'
            ]
        }
    },
    frameworks: {
        rice: {
            title: 'RICE Framework',
            intro: 'A quantitative prioritization framework that helps teams evaluate initiatives based on four factors.',
            formula: {
                title: 'RICE Score Formula',
                equation: 'RICE Score = (Reach × Impact × Confidence) ÷ Effort',
                notes: [
                    'Higher RICE score = Higher priority',
                    'All components should use consistent time periods (e.g., per quarter)',
                    'Final score helps compare different initiatives objectively'
                ]
            },
            components: {
                reach: {
                    title: 'R - Reach',
                    description: 'Number of people/events impacted in a specific time period',
                    example: '500 users per month'
                },
                impact: {
                    title: 'I - Impact',
                    description: 'Effect on target metric (Scale: 0.25-3)',
                    scale: [
                        '3.0 = Massive impact',
                        '2.0 = High impact',
                        '1.0 = Medium impact',
                        '0.5 = Low impact',
                        '0.25 = Minimal impact'
                    ]
                },
                confidence: {
                    title: 'C - Confidence',
                    description: 'Confidence level in estimates',
                    scale: [
                        '100% = High confidence',
                        '80% = Medium confidence',
                        '50% = Low confidence'
                    ]
                },
                effort: {
                    title: 'E - Effort',
                    description: 'Estimated person-months required',
                    example: '2.5 person-months'
                }
            }
        }
        // Add other frameworks here
    }
};
