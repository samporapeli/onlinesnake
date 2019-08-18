class Theme {
    constructor(name = 'classic',
        css = 'classic.css',
        background = 'white',
        textColor = 'black',
        treatColor = 'blue',
        headColor = 'red',
        bodyColor = 'lightred',
        otherColor = 'blue',
        otherHead = 'lightblue') {
        this.name = name;
        this.css = css;
        this.background = background;
        this.textColor = textColor;
        this.treatColor = treatColor;
        this.headColor = headColor;
        this.bodyColor = bodyColor;
        this.otherColor = otherColor;
        this.otherHead = otherHead;
        this.font = '20px Arial';
    }
}

classicTheme = new Theme();
darkTheme = new Theme('dark');
darkTheme.css = 'dark.css';
darkTheme.background = '#1D1F26';
darkTheme.textColor = 'white';
darkTheme.treatColor = '#86ADE1';
darkTheme.font = '20px Blinker';
themesAvailable = ["classic", "dark"];