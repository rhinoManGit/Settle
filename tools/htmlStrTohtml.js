/*
*
*
* */
module.exports = function (str) {

    /*
       *
       * replace
       *  <span>  use [SpanP]
       *  </span> use [SpanS]
       *  '<'     use [*lt*]
       *  '</'    use [lt]
       *  '>'     use [*gt*]
       *
       *  text
       *  [text-p] text [text-u]
       *  attr
       *  [attr-p]type=[attr-u]
       *  [attrV-p]"size"[attrV-u]
       *  '='
       *  text Contain = replace '[equal]'
       *  '>': [tGt]
       *  '<': [tLt]
       *
       *
       * */

    // replace pre label
    return str.replace(/script>([\s\S]+)<\/script/i, function (m, p1) {

        var _s = p1.replace(/>/g, '[tGt]')
            .replace(/</g, '[tLt]')
            .replace(/=/g, '[equal]');

        return 'script>' + _s + '<\/script';
    })
        .replace(/>[^><]+<\//gi, function (m) {

        var _t = m.replace(/>/g, '>[text-p]')
            .replace(/</g, '[text-u]<')
            .replace(/=/g, '[equal]');

        return _t;
    }).replace(/(<)(\w+)[^>]*(>)/gi, function (m) {

        var _label = m.replace(/<(\w+)/, function(m, p1){
            return '[SpanP][*lt*][SpanS][SpanP]' + p1 + '[SpanS]';
        }).replace('>', '[SpanP][*gt*][SpanS]');

        return _label;
    }).replace(/(<\/)[^>]*>/gi, function (m) {

        var label_ = m.replace(/<\/(\w+)/, function(m, p1){
            return '[SpanP][lt][SpanS][SpanP]' + p1 + '[SpanS]';
        }).replace('>', '[SpanP][*gt*][SpanS]');

        return label_;
    }).replace(/\s+(["']?[\:\w+\-\@]*["']?=["']?[\w+\-\.\s\:\;\,\@\&\(\)\?\=\/\{\}\[\]\#\u4e00-\u9fa5]*["']?)/gi, function (m) {

        var _attr = m.replace(/(["'(]?[\:\w+\-\@]*["']?)=(["']?[\w+\-\.\s\:\;\#\,\@\&\(\)\?\=\/\{\}\\[\]\u4e00-\u9fa5]*["')]?)/, function (m, p1, p2) {

            return '[attr-p]' + p1 + '=[attr-u]' + '[attrV-p]' + p2 + '[attrV-u]'
        })

        return _attr
    }).replace(/(\[SpanP\])/g, '<span>')
        .replace(/(\[SpanS\])/g, '<\/span>')
        .replace(/(\[\*lt\*\])/g, '&lt;')
        .replace(/(\[lt\])/g, '&lt;\/')
        .replace(/(\[\*gt\*\])/g, '&gt;')
        .replace(/(\[text-p\])/g, '<b>')
        .replace(/(\[text-u\])/g, '<\/b>')
        .replace(/(\[equal\])/g, '=')
        .replace(/(\[tGt\])/g, '&gt;')
        .replace(/(\[tLt\])/g, '&lt;')
        .replace(/(\[attr-p\])/g, '<em>')
        .replace(/(\[attr-u\])/g, '<\/em>')
        .replace(/(\[attrV-p\])/g, '<pre>')
        .replace(/(\[attrV-u\])/g, '<\/pre>')
        .replace(/\n/g, '<br/>')
        .replace(/{{/g, '<b>{</b><b>{</b>') //{{}} vue 中会强制做渲染
        .replace(/}}/g, '<b>}</b><b>}</b>')
        .replace(/\s/g, '&nbsp;');

}