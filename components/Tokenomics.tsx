'use client'

import { motion } from 'framer-motion'
import { TrendingUp, PieChart, DollarSign, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const tokenomicsData = [
    {
        category: 'Seed',
        totalSupply: '5,000,000,000',
        percent: '10.00%',
        price: '$0.00040',
        valuation: '$2,000,000',
        collected: '$200,000',
        tgeUnlock: '20%',
        cliff: '0 days',
        vesting: '182 days'
    },
    {
        category: 'Private',
        totalSupply: '12,500,000,000',
        percent: '25.00%',
        price: '$0.00032',
        valuation: '$4,000,000',
        collected: '$1,000,000',
        tgeUnlock: '20%',
        cliff: '0 days',
        vesting: '182 days'
    },
    {
        category: 'Public',
        totalSupply: '15,000,000,000',
        percent: '30.00%',
        price: '$0.00016',
        valuation: '$10,000,000',
        collected: '$3,000,000',
        tgeUnlock: '20%',
        cliff: '1 day',
        vesting: '91 days'
    },
    {
        category: 'Liquidity',
        totalSupply: '3,500,000,000',
        percent: '7.00%',
        price: '$0.00016',
        valuation: '$10,000,000',
        collected: '$0',
        tgeUnlock: '100%',
        cliff: '0 days',
        vesting: '0 days'
    },
    {
        category: 'Team & Advisors',
        totalSupply: '4,000,000,000',
        percent: '8.00%',
        price: '$0.00016',
        valuation: '$10,000,000',
        collected: '$0',
        tgeUnlock: '5%',
        cliff: '30 days',
        vesting: '1095 days'
    },
    {
        category: 'Foundation',
        totalSupply: '10,000,000,000',
        percent: '20.00%',
        price: '$0.00016',
        valuation: '$10,000,000',
        collected: '$0',
        tgeUnlock: '20%',
        cliff: '182 days',
        vesting: '1095 days'
    }
]

const keyStats = [
    {
        icon: DollarSign,
        label: 'Public Sale Price',
        value: '$0.00016',
        color: 'primary'
    },
    {
        icon: TrendingUp,
        label: 'Total Supply',
        value: '50,000,000,000',
        color: 'secondary'
    },
    {
        icon: PieChart,
        label: 'Total Valuation',
        value: '$8,000,000',
        color: 'primary'
    },
    {
        icon: Calendar,
        label: 'Collected USDT',
        value: '$4,200,000',
        color: 'secondary'
    }
]

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        $DLOG Tokenomics
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        $DLOG coin for all transactions in the logistics marketplace with comprehensive token distribution and vesting schedule
                    </p>
                </motion.div>

                {/* Key Stats */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {keyStats.map((stat, index) => {
                        const Icon = stat.icon
                        const colorClass = stat.color === 'primary' ? 'primary' : 'secondary'

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className="pb-4">
                                        <div className={`bg-${colorClass}-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
                                            <Icon className={`h-6 w-6 text-${colorClass}-600`} />
                                        </div>
                                        <CardTitle className="text-lg">
                                            {stat.label}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className={`text-2xl font-bold text-${colorClass}-600`}>
                                            {stat.value}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Tokenomics Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Token Allocation & Vesting Schedule</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="font-semibold">Allocation</TableHead>
                                            <TableHead className="font-semibold">Total Supply</TableHead>
                                            <TableHead className="font-semibold">% of Total</TableHead>
                                            <TableHead className="font-semibold">Price per Token</TableHead>
                                            <TableHead className="font-semibold">Valuation</TableHead>
                                            <TableHead className="font-semibold">Collected USDT</TableHead>
                                            <TableHead className="font-semibold">TGE Unlock</TableHead>
                                            <TableHead className="font-semibold">Cliff</TableHead>
                                            <TableHead className="font-semibold">Linear Vesting</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {tokenomicsData.map((row, index) => (
                                            <TableRow key={index} className="hover:bg-gray-50">
                                                <TableCell className="font-medium">
                                                    <Badge variant="secondary" className="text-xs">
                                                        {row.category}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="font-mono text-sm">{row.totalSupply}</TableCell>
                                                <TableCell className="font-semibold text-primary-600">{row.percent}</TableCell>
                                                <TableCell className="font-mono text-sm">{row.price}</TableCell>
                                                <TableCell className="font-mono text-sm">{row.valuation}</TableCell>
                                                <TableCell className="font-mono text-sm text-green-600">{row.collected}</TableCell>
                                                <TableCell className="font-semibold text-blue-600">{row.tgeUnlock}</TableCell>
                                                <TableCell className="text-sm">{row.cliff}</TableCell>
                                                <TableCell className="text-sm">{row.vesting}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Buyback Policy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Card className="bg-primary-50 border-primary-200">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Buyback Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-gray-700">
                                50% of company income will be used to buy back $DLOG from the
                                open market to support price appreciation alongside platform growth.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
                        <CardContent className="py-8">
                            <h3 className="text-2xl font-bold mb-4">Token Distribution Summary</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <p className="text-3xl font-bold text-primary-600">35%</p>
                                    <p className="text-gray-600">Early Investors</p>
                                    <p className="text-sm text-gray-500">Seed & Private rounds</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-secondary-600">37%</p>
                                    <p className="text-gray-600">Public & Liquidity</p>
                                    <p className="text-sm text-gray-500">Public sale & DEX liquidity</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-600">28%</p>
                                    <p className="text-gray-600">Team & Foundation</p>
                                    <p className="text-sm text-gray-500">Long-term aligned holders</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
