// TypewriterText.js
import React, { useState, useEffect } from 'react';

const TypewriterText = ({ fullText, speed, isDeleting, setIsDeleting, setDisplayText, currentText }) => {
  const [text, setText] = useState(''); // Le texte affiché dans l'animation

  useEffect(() => {
    let timer;

    // Si nous ne sommes pas en train de supprimer et que le texte n'est pas complet
    if (!isDeleting && text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1)); // Ajouter un caractère à chaque fois
      }, speed);
    } 
    // Si nous sommes en train de supprimer le texte
    else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1)); // Supprimer un caractère à chaque fois
      }, speed / 2);
    } 
    // Quand l'animation est terminée, commencer à supprimer après un délai
    else if (!isDeleting && text.length === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true); // Passer à la phase de suppression
      }, 2000); // Attendre 2 secondes avant de commencer la suppression
    } 
    // Si le texte est entièrement supprimé, basculer vers l'autre texte
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setDisplayText(currentText === 'fullText1' ? 'fullText2' : 'fullText1'); // Alterner entre les textes
    }

    return () => clearTimeout(timer); // Nettoyer le timer à chaque mise à jour
  }, [text, isDeleting, fullText, speed, setIsDeleting, setDisplayText, currentText]);

  return <span>{text}|</span>; // Afficher le texte avec un curseur qui clignote
};

export default TypewriterText;
