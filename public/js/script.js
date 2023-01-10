const data = [
    {
        id: 1,
        name: 'Olivia Rhye',
        username: '@olivia',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Active',
        email: 'olivia@untitled.com',
        team: {1:'Design', 2:'Product'} 
    },
    {
        id: 2,
        name: 'Phoenix Baker',
        username: '@phoenix',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Active',
        email: 'phoenix@untitled.com',
        team: ['Product', 'Software Engineer'] 
    },
    {
        id: 3,
        name: 'Lana Steiner',
        username: '@lana',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Offline',
        email: 'lana@untitled.com',
        team: ['Operations', 'Product'] 
    },
    {
        id: 4,
        name: 'Demi Wilkinson',
        username: '@demi',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Active',
        email: 'demi@untitled.com',
        team: ['Design', 'Product', 'Software Engineering'] 
    },
    {
        id: 5,
        name: 'Candice Wu',
        username: '@candice',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Offline',
        email: 'candice@untitled.com',
        team: ['Operations', 'Finance'] 
    },
    {
        id: 6,
        name: 'Natali Craig',
        username: '@natali',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Active',
        email: 'natali@untitled.com',
        team: ['Design', 'Marketing'] 
    },
    {
        id: 7,
        name: 'Drew Cano',
        username: '@drew',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Active',
        email: 'drew@untitled.com',
        team: ['Customer Success', 'Operations', 'Marketing'] 
    },
    {
        id: 8,
        name: 'Orlando Diggs',
        username: '@orlando',
        photo: 'https://avatars.githubusercontent.com/u/22469178?v=4',
        status: 'Active',
        email: 'orlando@untitled.com',
        team: ['Product', 'Software Engineering'] 
    }
]

data.map(datas => {     
    return document.getElementById('data').insertAdjacentHTML('beforebegin',
    `<tr class=${datas.id % 2 === 0 ? 'bg-white' : 'bg-slate-100/60'}>        
        <td class="w-4 px-4 py-8">
            <div class="flex items-center">
                <input id="check-1" type="checkbox" class="w-4 h-4 appearance-none checked:bg-slate-500 text-slate-600 border-[1.4px] border-slate-300 rounded-[4px] focus:ring-slate-500">
                <label for="check-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th scope="row" class="text-gray-900 whitespace-nowrap">
            <div class="flex items-center">
                <img class="w-10 rounded-full" src="https://avatars.githubusercontent.com/u/22469178?v=4" alt="#">
                <div class="pl-3">
                    <div class="text-base font-semibold">${datas.name}</div>
                    <div class="font-normal text-gray-500">${datas.username}</div>
                </div>  
            </div>
        </th>
        <td>                                 
            <div class="px-3 pt-[1px] pb-1 ${datas.status === 'Active' ? 'bg-green-200/30 text-green-600' : 'bg-slate-300/30 text-slate-700'} rounded-full font-semibold flex items-center w-max">
                <div class="h-2 w-2 rounded-full ${datas.status === 'Active' ? 'bg-green-500' : 'bg-slate-600'} mr-2 mt-[1px]"></div>
                ${datas.status}
            </div>                                                                    
        </td>
        <td>
            ${datas.email}
        </td>
        <td>
            <div class="flex gap-2 items-center">
                <div class="px-2 pt-[1px] pb-1 bg-purple-200/30 text-purple-500 rounded-full font-semibold flex items-center w-max">           
                    ${datas.team[1]}                    
                    ${datas.team[2]}                    
                </div>                                                   
            </div>
        </td>
        <td>
            <div class="flex gap-4 items-center cursor-pointer">
                <div class="p-2 hover:text-slate-900 hover:bg-slate-200/50 hover:rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash cursor-pointer" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </div>
                <div class="p-2 hover:text-slate-900 hover:bg-slate-200/50 hover:rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil cursor-pointer" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </div>
            </div>
        </td>
    </tr>`
)})
