import Sidebar from './Sidebar'

import styles from '../../styles/Dashboard/Dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home({products , orders , clients , users}) {
  const date = new Date();
  var y = date.getFullYear();
  var months =[];
  for(var i =1 ;i< 12 ; i++){
    if(i<10) i = "0" + i;
    months[i] = [];
    for(var x = 1 ; x<=31 ; x++){
      if(x<10) x = "0" + x;
      months[i].push(y+"-"+i+"-"+x)
    }
  }
  
  {/* Get Sales and Orders in Months */}

    {/*Sales Variables*/}
  var SalesJanuary= []; var totalSalesJanuary =0;
  var SalesFebruary = []; var totalSalesFebruary = 0;
  var SalesMarch=[]; var totalSalesMarch = 0;
  var SalesApril=[]; var totalSalesApril = 0;
  var SalesMay=[]; var totalSalesMay = 0;
  var SalesJune = []; var totalSalesJune = 0;
  var SalesJuly=[]; var totalSalesJuly = 0;
  var SalesAugust=[];  var totalSalesAugust=0;
  var SalesSeptember=[]; var totalSalesSeptember=0;
  var SalesOctober=[]; var totalSalesOctober =0;
  var SalesNovember=[]; var totalSalesNovember=0;
  var SalesDecember=[]; var totalSalesDecember=0;

  {/*Orders Variables*/}
  var OrdersJanuary= []; 
  var OrdersFebruary = []; 
  var OrdersMarch=[]; 
  var OrdersApril=[]; 
  var OrdersMay=[];
  var OrdersJune = []; 
  var OrdersJuly=[]; 
  var OrdersAugust=[]; 
  var OrdersSeptember=[];
  var OrdersOctober=[];
  var OrdersNovember=[];
  var OrdersDecember=[];
   orders?.map(order=>{
    for(var x=0 ; x<months['01'].length; x++){
      if(order.created_at == months['01'][x]){
      SalesJanuary.push(order?.product.price * order.quantity)
      OrdersJanuary.push(order.id)}
    }
    for(var x=0 ; x<months['02'].length; x++){
      if(order.created_at == months['02'][x]){
      SalesFebruary.push(order?.product.price * order.quantity)
      OrdersFebruary.push( order.id)}

    }
    for(var x=0 ; x<months['03'].length; x++){
      if(order.created_at == months['03'][x]){
      SalesMarch.push(order?.product.price * order.quantity)
      OrdersMarch.push(order.id)
    }
    }
    for(var x=0 ; x<months['04'].length; x++){
      if(order.created_at == months['04'][x]){
      SalesApril.push(order?.product.price * order.quantity)
      OrdersApril.push(order.id)}
    }
    for(var x=0 ; x<months['05'].length; x++){
      if(order.created_at == months['05'][x]){
      SalesMay.push(order?.product.price * order.quantity)
      OrdersMay.push(order.id)}
    }
    for(var x=0 ; x<months['06'].length; x++){
      if(order.created_at == months['06'][x]){
      SalesJune.push(order?.product.price * order.quantity)
      OrdersJune.push(order.id)}
    }
    for(var x=0 ; x<months['07'].length; x++){
      if(order.created_at == months['07'][x]){
      SalesJuly.push(order?.product.price * order.quantity)
      OrdersJuly.push(order.id)}
    }
    for(var x=0 ; x<=months['08'].length; x++){
      if(order.created_at == months['08'][x]){
      SalesAugust.push(order?.product.price * order.quantity)
      OrdersAugust.push(order.id)}
    }
    for(var x=0 ; x<=months['09'].length; x++){
      if(order.created_at == months['09'][x]){
      SalesSeptember.push(order?.product.price * order.quantity)
      OrdersSeptember.push(order.id)}
    }
    for(var x=0 ; x<=months['10'].length; x++){
      if(order.created_at == months['10'][x]){
      SalesOctober.push(order?.product.price * order.quantity)
      OrdersOctober.push(order.id)}
    }
    for(var x=0 ; x<=months['11'].length; x++){
      if(order.created_at == months['11'][x]){
      SalesNovember.push(order?.product.price * order.quantity)
      OrdersNovember.push(order.id)}
    }
    for(var x=0 ; x<=months['12']?.length; x++){
      if(order.created_at == months['12'][x]){
      SalesDecember.push(order?.product.price * order.quantity)
      OrdersDecember.push(order.id)}
    }
  })
      {/* for Sales */}
  for(var i =0 ; i<SalesJanuary.length ;i++){
    totalSalesJanuary += SalesJanuary[i];
  }
  for(var i =0 ; i<SalesFebruary.length ;i++){
    totalSalesFebruary += SalesFebruary[i];
  }
  for(var i =0 ; i<SalesMarch.length ;i++){
    totalSalesMarch += SalesMarch[i];
  }
  for(var i =0 ; i<SalesApril.length ;i++){
    totalSalesApril += SalesApril[i];
  }
  for(var i =0 ; i<SalesMay.length ;i++){
    totalSalesMay += SalesMay[i];
  }
  for(var i =0 ; i<SalesJune.length ;i++){
    totalSalesJune += SalesJune[i];
  }
  for(var i =0 ; i<SalesJuly.length ;i++){
    totalSalesJuly += SalesJuly[i];
  }
  for(var i =0 ; i<SalesAugust.length ;i++){
    totalSalesAugust += SalesAugust[i];
  }
  for(var i =0 ; i<SalesSeptember.length ;i++){
    totalSalesSeptember += SalesSeptember[i];
  }
  for(var i =0 ; i<SalesOctober.length ;i++){
    totalSalesOctober += SalesOctober[i];
  }
  for(var i =0 ; i<SalesNovember.length ;i++){
    totalSalesNovember += SalesNovember[i];
  }
  for(var i =0 ; i<SalesDecember.length ;i++){
    totalSalesDecember += SalesDecember[i];
  }
  var totalSalesMonths =[totalSalesJanuary ,totalSalesFebruary,totalSalesMarch,totalSalesApril,totalSalesMay,
    totalSalesJune,totalSalesJuly ,totalSalesAugust,totalSalesSeptember,totalSalesOctober,totalSalesNovember
    ,totalSalesDecember]

  {/* for orders*/}
  var totalOrdersJanuary =OrdersJanuary?.length;
  var totalOrdersFebruary =OrdersFebruary?.length;
  var totalOrdersMarch =OrdersMarch?.length ;
  var totalOrdersApril =OrdersApril?.length;
  var totalOrdersMay =OrdersMay?.length;
  var totalOrdersJune =OrdersJune?.length;
  var totalOrdersJuly =OrdersJuly?.length;
  var totalOrdersAugust=OrdersAugust?.length;
  var totalOrdersSeptember=OrdersSeptember?.length;
  var totalOrdersOctober =OrdersOctober?.length;
  var totalOrdersNovember=OrdersNovember?.length;
  var totalOrdersDecember=OrdersDecember?.length;

  var totalOrdersMonths =[totalOrdersJanuary ,totalOrdersFebruary,totalOrdersMarch,totalOrdersApril,totalOrdersMay,
    totalOrdersJune,totalOrdersJuly ,totalOrdersAugust,totalOrdersSeptember,totalOrdersOctober,totalOrdersNovember
    ,totalOrdersDecember]

     {/* Get Clients in Months */}
  var ClientsJanuary= [];
  var ClientsFebruary = []; 
  var ClientsMarch=[]; 
  var ClientsApril=[];
  var ClientsMay=[]; 
  var ClientsJune = []; 
  var ClientsJuly=[]; 
  var ClientsAugust=[];  
  var ClientsSeptember=[]; 
  var ClientsOctober=[]; 
  var ClientsNovember=[];
  var ClientsDecember=[]; 
     clients?.map(client=>{
      for(var x=0 ; x<months['01'].length; x++){
        if(client.created_at == months['01'][x])
        ClientsJanuary.push(client?.id)
      }
      for(var x=0 ; x<months['02'].length; x++){
        if(client.created_at == months['02'][x])
        ClientsFebruary.push(client?.id)
      }
      for(var x=0 ; x<months['03'].length; x++){
        if(client.created_at == months['03'][x])
        ClientsMarch.push(client?.id)
      }
      for(var x=0 ; x<months['04'].length; x++){
        if(client.created_at == months['04'][x])
        ClientsApril.push(client?.id)
      }
      for(var x=0 ; x<months['05'].length; x++){
        if(client.created_at == months['05'][x])
        ClientsMay.push(client?.id)
      }
      for(var x=0 ; x<months['06'].length; x++){
        if(client.created_at == months['06'][x])
        ClientsJune.push(client?.id)
      }
      for(var x=0 ; x<months['07'].length; x++){
        if(client.created_at == months['07'][x])
        ClientsJuly.push(client?.id)
      }
      for(var x=0 ; x<=months['08'].length; x++){
        if(client.created_at == months['08'][x])
        ClientsAugust.push(client?.id)
      }
      for(var x=0 ; x<=months['09'].length; x++){
        if(client.created_at == months['09'][x])
        ClientsSeptember.push(client?.id)
      }
      for(var x=0 ; x<=months['10'].length; x++){
        if(client.created_at == months['10'][x])
        ClientsOctober.push(client?.id)
      }
      for(var x=0 ; x<=months['11'].length; x++){
        if(client.created_at == months['11'][x])
        ClientsNovember.push(client?.id)
      }
      for(var x=0 ; x<=months['12']?.length; x++){
        if(client.created_at == months['12'][x])
        ClientsDecember.push(client?.id)
      }
    })
  var totalClientsJanuary =ClientsJanuary?.length;
  var totalClientsFebruary =ClientsFebruary?.length;
  var totalClientsMarch =ClientsMarch?.length ;
  var totalClientsApril =ClientsApril?.length;
  var totalClientsMay =ClientsMay?.length;
  var totalClientsJune =ClientsJune?.length;
  var totalClientsJuly =ClientsJuly?.length;
  var totalClientsAugust=ClientsAugust?.length;
  var totalClientsSeptember=ClientsSeptember?.length;
  var totalClientsOctober =ClientsOctober?.length;
  var totalClientsNovember=ClientsNovember?.length;
  var totalClientsDecember=ClientsDecember?.length;
    
    var totalClientsMonths =[totalClientsJanuary ,totalClientsFebruary,totalClientsMarch,totalClientsApril,totalClientsMay,
      totalClientsJune,totalClientsJuly ,totalClientsAugust,totalClientsSeptember,totalClientsOctober,totalClientsNovember
      ,totalClientsDecember]


  {/* Get Users in Months */}
      var UsersJanuary= [];
      var UsersFebruary = []; 
      var UsersMarch=[]; 
      var UsersApril=[];
      var UsersMay=[]; 
      var UsersJune = []; 
      var UsersJuly=[]; 
      var UsersAugust=[];  
      var UsersSeptember=[]; 
      var UsersOctober=[]; 
      var UsersNovember=[];
      var UsersDecember=[]; 
         users?.map(user=>{
          for(var x=0 ; x<months['01'].length; x++){
            if(user.created_at == months['01'][x])
            UsersJanuary.push(user?.id)
          }
          for(var x=0 ; x<months['02'].length; x++){
            if(user.created_at == months['02'][x])
            UsersFebruary.push(user?.id)
          }
          for(var x=0 ; x<months['03'].length; x++){
            if(user.created_at == months['03'][x])
            UsersMarch.push(user?.id)
          }
          for(var x=0 ; x<months['04'].length; x++){
            if(user.created_at == months['04'][x])
            UsersApril.push(user?.id)
          }
          for(var x=0 ; x<months['05'].length; x++){
            if(user.created_at == months['05'][x])
            UsersMay.push(user?.id)
          }
          for(var x=0 ; x<months['06'].length; x++){
            if(user.created_at == months['06'][x])
            UsersJune.push(user?.id)
          }
          for(var x=0 ; x<months['07'].length; x++){
            if(user.created_at == months['07'][x])
            UsersJuly.push(user?.id)
          }
          for(var x=0 ; x<=months['08'].length; x++){
            if(user.created_at == months['08'][x])
            UsersAugust.push(user?.id)
          }
          for(var x=0 ; x<=months['09'].length; x++){
            if(user.created_at == months['09'][x])
            UsersSeptember.push(user?.id)
          }
          for(var x=0 ; x<=months['10'].length; x++){
            if(user.created_at == months['10'][x])
            UsersOctober.push(user?.id)
          }
          for(var x=0 ; x<=months['11'].length; x++){
            if(user.created_at == months['11'][x])
            UsersNovember.push(user?.id)
          }
          for(var x=0 ; x<=months['12']?.length; x++){
            if(user.created_at == months['12'][x])
            UsersDecember.push(user?.id)
          }
        })
      var totalUsersJanuary =UsersJanuary?.length;
      var totalUsersFebruary =UsersFebruary?.length;
      var totalUsersMarch =UsersMarch?.length ;
      var totalUsersApril =UsersApril?.length;
      var totalUsersMay =UsersMay?.length;
      var totalUsersJune =UsersJune?.length;
      var totalUsersJuly =UsersJuly?.length;
      var totalUsersAugust=UsersAugust?.length;
      var totalUsersSeptember=UsersSeptember?.length;
      var totalUsersOctober =UsersOctober?.length;
      var totalUsersNovember=UsersNovember?.length;
      var totalUsersDecember=UsersDecember?.length;
        
        var totalUsersMonths =[totalUsersJanuary ,totalUsersFebruary,totalUsersMarch,totalUsersApril,totalUsersMay,
          totalUsersJune,totalUsersJuly ,totalUsersAugust,totalUsersSeptember,totalUsersOctober,totalUsersNovember
          ,totalUsersDecember]

  
  return (
    <div className="container" id={styles.container} style={{overflowX : 'none'}} >
       
                <Sidebar products={products} orders={orders} clients={clients} users={users}
                 totalSalesMonths={totalSalesMonths} totalClientsMonths={totalClientsMonths}
                 totalUsersMonths={totalUsersMonths} totalOrdersMonths={totalOrdersMonths} />
            
          </div>
  )
}
