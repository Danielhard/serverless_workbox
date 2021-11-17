
  import { IDatas, ElementType } from "./type";
  
  const init = {
    method: 'Get',
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  }
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=5715dae9-edb9-4b6c-87ed-b337a4ba0c44&convert=USDT"
  const map = {
    1027:'ETH',
    1839: 'BNB',
  } as const;
  const item = [1027, 1839] as const;
  
  
  export const getData = async () =>{
      
    const myRequest = new Request(url, init)
    const results = await (await fetch(myRequest)).json() as IDatas<typeof item>;
    const res = {
       ETH: 0,
       BNB: 0
    }

    for(const key in results.data) {
        const _key = key as unknown as ElementType<typeof item>
        const value =  results.data[_key].quote.USDT.price;
        res[map[_key]]=value;
   }
   console.log('price:',JSON.stringify(res))
   await COINS.put('price:'+Date.now().toString(), JSON.stringify(res))
  }