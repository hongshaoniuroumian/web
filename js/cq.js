function $$(elm, type = 'class') {
    /**
     * 
     * switch(type)
     *  $('.id')
     *  reg = /^./ === '#' .
     *  === 
     *  1 === '1'  false
     *  1 == '1'  true
     */

    if(type === 'class') {
        return document.getElementsByClassName(elm);
    }

    if(type === 'id') {
        return document.getElementById(elm);
    }

}