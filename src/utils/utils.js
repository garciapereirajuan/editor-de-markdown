import $ from 'jquery';

export const getClassGrid = (sizeComplete) => {
    const classBasic = "cont-prev-editor-basic";
    const classComplete = "cont-prev-editor-complete";
    return (
    sizeComplete ? `${classBasic} ${classComplete}`: classBasic );
}; 
  
export const getTabulationTextarea = () => { 
    $('#editor').keydown(function(e) {
       var keyCode = e.keyCode || e.which; 
       if (keyCode === 9) {
         e.preventDefault(); 
         var start = this.selectionStart;
         var end = this.selectionEnd;
         $(this).val($(this).val().substring(0, start)
                     + "    "
                     + $(this).val().substring(end));
         this.selectionStart = this.selectionEnd = start + 4;
       }
     });
   };
    
export const changeElementsSize = (sizeComplete, setSizeEditorAndPreview) => {
    sizeComplete ?  setSizeEditorAndPreview(12,12) : setSizeEditorAndPreview(5,7);
}; 

export const handlerClasses = (element, setButtonSelect) => {
    const buttonClass = (element) => document.querySelector("."+element);
    const testClass = /select/g.test(buttonClass(element).classList);   
    if(!testClass) {
      buttonClass("editor").classList.remove("select");
      buttonClass("preview").classList.remove("select");
      buttonClass(element).classList.add("select");
    }
};

export const deviceScreenLimit = (limit = 900) => window.innerWidth >= limit;
  
export const getUrl = () => {
    const gitUrl = "https://github.com/garciapereirajuan/editor-markdown.git";
    const markdownUrl = "https://daringfireball.net/projects/markdown/";
    return { gitUrl, markdownUrl }; 
};