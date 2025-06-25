
import jsPDF from 'jspdf';
import { germanSeparableVerbs, VerbGroup } from '../data/germanVerbs';

export const generateVerbsPDF = (): void => {
  const doc = new jsPDF();
  let yPosition = 20;
  const pageHeight = 280;
  const lineHeight = 6;

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('German Separable Verbs - Study Guide', 20, yPosition);
  yPosition += 15;

  // Subtitle
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Complete list with translations, key points, and examples', 20, yPosition);
  yPosition += 15;

  germanSeparableVerbs.forEach((group: VerbGroup) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }

    // Prefix header
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`${group.prefix.toUpperCase()} - ${group.description}`, 20, yPosition);
    yPosition += 10;

    group.verbs.forEach((verb) => {
      // Check if we need a new page for this verb
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }

      // Verb name
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(`• ${verb.verb}`, 25, yPosition);
      yPosition += lineHeight;

      // Translation
      doc.setFont('helvetica', 'normal');
      doc.text(`  Translation: ${verb.translation}`, 30, yPosition);
      yPosition += lineHeight;

      // Key point
      doc.setFont('helvetica', 'italic');
      doc.text(`  Key Point: ${verb.keyPoint}`, 30, yPosition);
      yPosition += lineHeight;

      // Examples
      doc.setFont('helvetica', 'normal');
      doc.text('  Examples:', 30, yPosition);
      yPosition += lineHeight;

      verb.examples.forEach((example) => {
        // Split long examples if necessary
        const splitExample = doc.splitTextToSize(`    - ${example}`, 160);
        splitExample.forEach((line: string) => {
          if (yPosition > pageHeight - 10) {
            doc.addPage();
            yPosition = 20;
          }
          doc.text(line, 30, yPosition);
          yPosition += lineHeight;
        });
      });

      yPosition += 3; // Extra space between verbs
    });

    yPosition += 5; // Extra space between groups
  });

  // Save the PDF
  doc.save('german-separable-verbs.pdf');
};
