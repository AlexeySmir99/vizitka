document.getElementById('sendButton').addEventListener('click', function() 
{
    const subject = document.getElementById('inp-nm').value;
    const body = document.getElementById('inp-text').value;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoLink = `mailto:smirnov.leshka2017@yandex.ru?subject=${encodedSubject}&body=${encodedBody}`;
    
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    
    
    
    tempLink.click();
    
    
});