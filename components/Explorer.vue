<template>
  <div class="pt-20 pb-10 px-10 min-h-screen h-screen bg-secondary">
    <div class="flex justify-between h-full" >
        <div class="w-7/12 px-4 pt-4 pb-2 bg-white drop-shadow-md rounded-sm">
            <div class="flex justify-between items-center pb-2 overflow-hidden">
                <h2 class="font-bold text-xl whitespace-nowrap">
                    Consensus Port Chain
                </h2>
                <div class="flex items-center h-8">
                    <div 
                    class="flex flex-col border-r border-primary px-2 text-center" 
                    v-for="(item, index) in chainAnalytics" :key="index" 
                    :class="index === chainAnalytics.length - 1 ? 'border-none' : ''"
                    >
                        <span class="text-grey font-extrabold h-3 text-xs whitespace-nowrap">{{item.title}}</span>
                        <span class="text-primary text-sm whitespace-nowrap">{{item.stat}}</span>
                    </div>
                </div>
            </div>
            <hr class="text-primary opacity-30 overflow-hidden">
            <div class="h-[95%] w-full overflow-hidden">
                <div class="h-[50%] flex justify-center pb-4">
                    <Chart 
                    chartID="transactionsChartData" 
                    type="line"
                    :chartData="transactionsChartData" 
                    title="Chain by Transaction Types" 
                    />
                </div>
                <div class="h-[50%] flex justify-center pb-4">
                    <Chart 
                    chartID="contentChartData"
                    type="line" 
                    :chartData="contentChartData" 
                    title="Chain by Content Type" 
                    />
                </div>
            </div>
            
        </div>
        <div class="w-2/5 px-4 pt-4 pb-2 bg-white drop-shadow-md rounded-sm items-center h-full">
            <div class="flex justify-between items-center pb-2 overflow-hidden">
                <h2 class="font-bold text-xl whitespace-nowrap">
                    Recent Transactions
                </h2>
                <div class="flex items-center h-8 ">
                    <div 
                    class="flex flex-col border-r border-primary px-4 text-center" 
                    v-for="(item, index) in transactionAnalytics" :key="index" 
                    :class="index === transactionAnalytics.length - 1 ? 'border-none' : ''"
                    >
                        <span class="text-grey font-extrabold h-3 text-xs whitespace-nowrap">{{item.title}}</span>
                        <span class="text-primary text-sm whitespace-nowrap">{{item.stat}}</span>
                    </div>
                </div>
            </div>
            <hr class="mb-0 text-primary opacity-30">
            <div class="overflow-auto h-[95%]">
                <div v-for="i in 20" :key="i" class="cursor-pointer">
                    <div class="flex justify-start">
                        <div class="flex flex-col justify-center w-4">
                            <div class=" border-r w-2 h-5/6 border-primary"></div>
                            <div class="rounded-full h-8 w-4 border border-primary"></div>
                            <div class=" border-r w-2 h-full border-primary"></div>
                        </div>
                        <div class="w-full overflow-hidden">
                            <div class="flex justify-start items-center mr-8 ">
                                <div class="flex flex-col pt-4 pr-4 pl-2 text-center">
                                    <span class="font-extrabold h-5 text-lg whitespace-nowrap">06, Jan 22</span>
                                    <span class="text-grey text-sm whitespace-nowrap">22:22</span>
                                </div>
                                <div class="h-8 flex flex-col overflow-hidden mt-4">
                                    <div class="hover:-translate-y-[70%] hover:duration-long">
                                        <div class="flex flex-col px-4 text-center">
                                            <span class="text-grey font-semibold h-3 text-xs whitespace-nowrap">Transaction Type</span>
                                            <span class="text-primary text-sm whitespace-nowrap">Smart Contract [Deployment]</span>
                                        </div>
                                        <div class="flex flex-col px-4 text-center">
                                            <span class="text-grey font-semibold h-3 text-xs whitespace-nowrap">Content Type</span>
                                            <span class="text-primary text-sm whitespace-nowrap">Supply Chain Data</span>
                                        </div>
                                        <div class="flex flex-col px-4 text-center">
                                            <span class="text-grey font-semibold h-3 text-xs whitespace-nowrap">Hash</span>
                                            <span class="text-primary text-sm whitespace-nowrap">00000000000005ad9e499c6df18acc5...</span>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <hr class="w-full mt-4 text-grey opacity-50">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const labels = []
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()

for (let index = 0; index < day; index++) {
    labels.push(`${index + 1}/${month + 1}`)
}

const transactionsChartData = useState("transactionsChartData", () => {
  return {
    labels: [...labels],
    datasets: [
      {
        type: "line",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        label: "Individual Transaction",
        color: "#ECAD8B",
        backgroundColor: "rgb(236, 173, 139, 0.0)",
        borderColor: "#ECAD8B",
        borderWidth: 1,
        tension: 0.4,
        fill: true
      },
      {
        type: "line",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        label: "Smart Contract [Deployment]",
        color: "#BF4300",
        backgroundColor: "rgb(236, 173, 139, 0.0)",
        borderColor: "#BF4300",
        borderWidth: 1,
        tension: 0.4,
        fill: true
      },
      {
        type: "line",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        label: "Smart Contract [Interaction]",
        color: "#898484",
        backgroundColor: "rgb(137, 132, 132, 0.0)",
        borderColor: "#898484",
        borderWidth: 1,
        tension: 0.4,
        fill: true
      },

    ],
  };
});

const contentChartData = useState("contentChartData", () => {
  return {
    labels: [...labels],
    datasets: [
      {
        type: "line",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        label: "Supply Chain Data",
        color: "#ECAD8B",
        backgroundColor: "rgb(236, 173, 139, 0.0)",
        borderColor: "#ECAD8B",
        borderWidth: 1,
        tension: 0.4,
        fill: true
      },
      {
        type: "line",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        label: "Digital Trading [Exchanges]",
        color: "#898484",
        backgroundColor: "rgb(137, 132, 132, 0.0)",
        borderColor: "#898484",
        borderWidth: 1,
        tension: 0.4,
        fill: true
      },
    ],
  };
});

const chainAnalytics = useState("chainAnalytics", () => {
  return [
    {
      title: "Latest Block",
      stat: "1,000,000"
    },
    {
      title: "Size",
      stat: "16,224,655 KB"
    },
    {
      title: "Current Fee",
      stat: "1 ACME"
    },
  ]
});

const transactionAnalytics = useState("transactionAnalytics", () => {
  return [
    {
      title: "Transactions",
      stat: "14,520,325"
    },
    {
      title: "Transactions Rate",
      stat: "4.04 TPS"
    },
  ]
});


</script>
