export let cssRoot = `
    padding: 10px;
`;
export let cssWrapper = `
    width: 800px;
    min-height: 200px;
    border: 3px solid black;
    margin: 40px auto;
    background-color: lightgray;
    border-radius: 20px;
    padding: 10px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
`;

export let cssPanel = `
    padding: 10px 10px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export let cssPanelButton = `
    flex-grow: 1 ;
    min-height: 60px;
    background-color: MediumAquamarine			;
    border: 3px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
`;

export let cssPanelInput =  `
    flex-grow: 2 ;
    min-height: 60px;
    background-color: white;
    color: black;
    padding: 10px;
    text-align: center;
    border: 3px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
`;

export let cssCard =  `
    width: 70%;
    min-height: 100px;
    border: 3px solid black;
    margin: 20px auto;
    background-color: lightgray;
    border-radius: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns:  1fr 3fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
    "c-status c-text c-close-button"
    "c-status c-text c-date";
    justify-items: stretch;
    gap: 10px;
`;

export let cssCardStatusWraper = `
    display: block;
    grid-area: c-status;
    justify-items: left;
    align-self: center;
    height: 60px;
    width: 60px;
`;

export let cssStatusSpan = `
    position: absolute;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 10px;
    border: 3px solid black;
    background-color: MediumAquamarine			;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    font-size: 20px;
    padding: 20px
`;

export let cssCardStatus = `
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
`;

export let cssCardDate = `
    grid-area: c-date;
    justify-self: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    min-width: 80px;
    height: 30px;
    padding: 10px 5px ;
    color: gray;
    font-size: 10px;
`;

export let cssCardText = `
    grid-area: c-text ;
    align-self: center;
    justify-self: center;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    min-width: 350px;
    height: 50px;
    padding: 15px;
    color: gray;
`;

export let cssCardCloseButton = `
    grid-area: c-close-button;
    justify-self: right;
    background-color: MediumAquamarine			;
    border: 3px solid black;
    border-radius: 10px;
    text-align: center;
    width: 40px;
    height: 30px;
    padding: 5px;
`; 

export let cssImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAArCAYAAAA65tviAAAACXBIWXMAAC4jAAAuIwF4pT92AAABYklEQVRogdWZbQ2DMBCGXwmTMAlIQQISJmEOkIAEJEwCEiYBCVtIICH9oleud9c3uezPVvps7bOjwHgeAKb9tenMAH4AvgC6VkHGHeKoFUDvvct4BgfiXK9WILrA5N2avE8Zy3NfQqHJu7VYlcA2qSUw4VSZlMBhKGqZkoBrKGot3ogKSRkqp9Z9b6kmx1BXpb5HKIaK1eCNmkhfgbrEUG6N3qiJHOt3ZYYpNdRRszdiIu4m5ILhMFT2H2HMJHdhYuNWMdTVxdbC1kDUULnfGLXPETUU9WfPhRE1VOnazYERM1RNi4ga6hMYgOOC4j0Uxxp2YdR6KE6YTrqHqgVzt0g9VCzaMKQeyipMSBjNwVS9y5OEqX6XJwFzy1BWYFgMpQ3DaigtGPXjTg4YE+dQYGhBTJ3VlsKIGYoSKoy4oWrAqBmKkisYsw9kQonBmDEUJSGYZh8pn2FMGoqSDeYtekUAf4SQBuU1udF6AAAAAElFTkSuQmCC')"



