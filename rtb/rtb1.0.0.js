class PoorTextBox
{
    Container;
    Menu;
    Content;
    Width = "300px";
    Height = "200px";

    constructor(){
        this.Container = document.getElementById("poorTextBox");
        if(!this.Container)
            throw "Container element not found!";
        
        this.Initialize();
    }

    Initialize(){
        this.CreateHtmlStructure(); //cria a estrutura html padrão
        this.Resize(); // aplica o tamanho padrão
    }

    CreateHtmlStructure(){
        this.CreateHtmlMenu();
        this.CreateHtmlContent();
    }

    CreateHtmlMenu(){
        this.Menu = document.createElement("div");
        this.Menu.setAttribute("id", "ptbMenu");
        this.Container.append(this.Menu);

        this.CreateHtmlMenuButtons();
    }

    CreateHtmlContent(){
        this.Content = document.createElement("div");
        this.Content.setAttribute("id", "ptbContent");
        this.Content.setAttribute("contenteditable", "true");
        this.Container.append(this.Content);
    }

    CreateHtmlMenuButtons(){
        this.CreateButtonBold();
        this.CreateButtonItalic();
        this.CreateButtonStrikeThrough();
        this.CreateButtonAlignLeft();
        this.CreateButtonAlignCenter();
        this.CreateButtonAlignRight();
        this.CreateButtonJustify();

        //Teste de quantidade de botões
        // for (let i = 0; i < 50; i++) {
        //     this.CreateButtonItalic();           
        // }
    }

    CreateButtonBold(){
        this.CreateButton("ptbBtnBold","Negrito",this.Bold,"rtb/img/bold48.png");
    }

    CreateButtonItalic(){
        this.CreateButton("ptbBtnItalic","Itálico",this.Italic,"rtb/img/italic48.png");
    }

    CreateButtonStrikeThrough(){
        this.CreateButton("ptbBtnStrikeThrough","Tachado",this.StrikeThrough,"rtb/img/strikethrough48.png");
    }

    CreateButtonAlignLeft(){
        this.CreateButton("ptbBtnAlignLeft","Alinhar à esquerda",this.AlignLeft,"rtb/img/alignleft48.png");
    }

    CreateButtonAlignCenter(){
        this.CreateButton("ptbBtnAlignCenter","Alinhar ao Centro",this.AlignCenter,"rtb/img/aligncenter48.png");
    }

    CreateButtonAlignRight(){
        this.CreateButton("ptbBtnAlignRight","Alinhar à direita",this.AlignRight,"rtb/img/alignright48.png");
    }

    CreateButtonJustify(){
        this.CreateButton("ptbBtnJustify","Justificar",this.Justify,"rtb/img/justify48.png");
    }

    CreateButton(id, text, clickEvent, backGroundImageUrl = null){
        let button = document.createElement("button");
        button.setAttribute("id", id);
        button.setAttribute("title", text);
        button.onclick = clickEvent;
        if(backGroundImageUrl != null){
            button.style.backgroundImage = "url(" + backGroundImageUrl + ")";
            button.style.backgroundRepeat = "no-repeat";
        }
        else{
            button.innerText = text;
        }

        this.Menu.append(button);
    }

    Resize(width = null, height = null){      
        
        this.Width = this.NormatizeSizeValue(width, this.Width);
        this.Height = this.NormatizeSizeValue(height, this.Height);
       
        this.Container.style.width = this.Width;

        //Tamanho vertical será aplicado ao conteúdo menos o tamanho do menu
        this.Content.style.height = (this.Height.replace("px","") - this.Menu.clientHeight) + "px";
    }

    NormatizeSizeValue(sizeValue, defaultValue){      
        if(!sizeValue)
            return defaultValue;

        //não possui px, então adiciona
        if(!sizeValue.toString().includes("px"))
            return sizeValue + "px";

        return sizeValue;
    }

    WriteText(inputText){
        this.Content.innerHTML = inputText;
    }

    Bold(){
        document.execCommand('bold');
    }

    Italic(){
        document.execCommand('italic');
    }

    StrikeThrough(){
        document.execCommand('strikeThrough');
    }

    AlignLeft(){
        document.execCommand('justifyLeft');
    }

    AlignCenter(){
        document.execCommand('justifyCenter');
    }

    AlignRight(){
        document.execCommand('justifyRight');
    }

    Justify(){
        document.execCommand('justifyFull');
    }
}