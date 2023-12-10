function htmlspecialchars(formData) {
    formData = formData.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    return formData;
}






