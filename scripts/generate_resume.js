const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 Size in points (72 DPI)
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const primaryColor = rgb(0.12, 0.23, 0.43); // Navy Blue (#1F3B6E)
  const textColor = rgb(0.15, 0.15, 0.15); // Dark Charcoal (#262626)
  const lightGray = rgb(0.4, 0.4, 0.4);
  const lineDividerColor = rgb(0.2, 0.35, 0.55);

  let y = height - 40;
  const leftMargin = 36;
  const rightMargin = width - 36;
  const contentWidth = rightMargin - leftMargin;

  // Helper for drawing section headers
  function drawSectionHeader(title) {
    y -= 14;
    page.drawText(title, {
      x: leftMargin,
      y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 1,
      color: lineDividerColor,
    });
    y -= 12;
  }

  // Helper for multi-line wrapped text
  function drawWrappedText(text, fontSize = 9, font = fontRegular, color = textColor, lineSpacing = 12, indent = 0) {
    const words = text.split(' ');
    let line = '';
    const x = leftMargin + indent;
    const maxWidth = contentWidth - indent;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxWidth && i > 0) {
        page.drawText(line, { x, y, size: fontSize, font, color });
        y -= lineSpacing;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x, y, size: fontSize, font, color });
      y -= lineSpacing;
    }
  }

  // Helper for bullet points
  function drawBullet(text, fontSize = 9, indent = 12) {
    const bulletChar = '• ';
    const xBullet = leftMargin + indent;
    const xText = leftMargin + indent + 10;
    const maxWidth = contentWidth - (indent + 10);

    page.drawText(bulletChar, { x: xBullet, y, size: fontSize, font: fontBold, color: textColor });

    const words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const testWidth = fontRegular.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxWidth && i > 0) {
        page.drawText(line, { x: xText, y, size: fontSize, font: fontRegular, color: textColor });
        y -= 12;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x: xText, y, size: fontSize, font: fontRegular, color: textColor });
      y -= 12;
    }
  }

  // HEADER - Name
  const nameText = "FAIJAN ANWAR";
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 20);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });
  y -= 16;

  // Subtitle
  const subTitle = "Software Developer | Full Stack Web Development";
  const subWidth = fontRegular.widthOfTextAtSize(subTitle, 10.5);
  page.drawText(subTitle, {
    x: (width - subWidth) / 2,
    y,
    size: 10.5,
    font: fontRegular,
    color: textColor,
  });
  y -= 14;

  // Contact Info Line
  const contactLine = "Jaipur, Rajasthan, India  |  +91 70147 02263  |  faizan244244@gmail.com  |  faijan.in  |  linkedin.com/in/faijan-anwar  |  github.com/faijananwar";
  const contactWidth = fontRegular.widthOfTextAtSize(contactLine, 7.8);
  page.drawText(contactLine, {
    x: (width - contactWidth) / 2,
    y,
    size: 7.8,
    font: fontRegular,
    color: lightGray,
  });
  y -= 8;

  // SECTION: PROFESSIONAL SUMMARY
  drawSectionHeader("PROFESSIONAL SUMMARY");
  drawWrappedText(
    "Software Developer with strong knowledge of software development fundamentals and hands-on experience building web applications. Proficient in JavaScript with good knowledge of Java and Python, along with React.js, Node.js, Express.js, RESTful APIs, and MongoDB. Familiar with relational databases such as MySQL and PostgreSQL, third-party API integration, Git, application security, and performance optimization. Strong problem-solving mindset with an ability to learn new technologies quickly and contribute effectively to software development projects.",
    8.8,
    fontRegular,
    textColor,
    11.5
  );

  // SECTION: TECHNICAL SKILLS
  drawSectionHeader("TECHNICAL SKILLS");
  const skills = [
    { label: "Programming Languages: ", val: "Java, Python, JavaScript (ES6+), TypeScript, C, C++" },
    { label: "Front-End: ", val: "React.js, Next.js, HTML5, CSS3, Tailwind CSS" },
    { label: "Back-End: ", val: "Node.js, Express.js, RESTful APIs, Microservices Architecture" },
    { label: "Databases: ", val: "MySQL, PostgreSQL, MongoDB, Supabase" },
    { label: "Core Fundamentals: ", val: "Data Structures & Algorithms, DBMS, Operating Systems, OOP, SDLC, Agile/Scrum" },
    { label: "Tools & Practices: ", val: "Git, GitHub, Postman, Code Review, Unit/API Testing, CI/CD (Vercel, Render), GCP" },
  ];

  for (const s of skills) {
    page.drawText(s.label, { x: leftMargin, y, size: 8.8, font: fontBold, color: textColor });
    const labelW = fontBold.widthOfTextAtSize(s.label, 8.8);
    page.drawText(s.val, { x: leftMargin + labelW, y, size: 8.8, font: fontRegular, color: textColor });
    y -= 11.5;
  }

  // SECTION: EXPERIENCE
  drawSectionHeader("EXPERIENCE");
  page.drawText("Full Stack Engineer", { x: leftMargin, y, size: 9.5, font: fontBold, color: textColor });
  const titleW = fontBold.widthOfTextAtSize("Full Stack Engineer", 9.5);
  page.drawText(" — Global IT Providers, Jaipur", { x: leftMargin + titleW, y, size: 9.5, font: fontOblique, color: textColor });
  
  const dateStr = "May 2026 – August";
  const dateW = fontOblique.widthOfTextAtSize(dateStr, 9);
  page.drawText(dateStr, { x: rightMargin - dateW, y, size: 9, font: fontOblique, color: textColor });
  y -= 13;

  drawBullet("Contribute to end-to-end web development projects, integrating REST APIs and third-party services while following clean architecture and coding best practices under senior developer review.");
  drawBullet("Build modular components and support database integration, debugging, and performance optimization.");
  drawBullet("Take part in code reviews, incorporating feedback to continuously improve code quality and development standards.");

  // SECTION: PROJECTS
  drawSectionHeader("PROJECTS");
  
  // DevBlog Platform
  page.drawText("DevBlog Platform", { x: leftMargin, y, size: 9.5, font: fontBold, color: textColor });
  const proj1W = fontBold.widthOfTextAtSize("DevBlog Platform", 9.5);
  page.drawText("  |  React, TypeScript, Node.js, Express.js, PostgreSQL", { x: leftMargin + proj1W, y, size: 9, font: fontOblique, color: lightGray });
  y -= 13;
  drawBullet("Developed a full-stack blogging platform with role-based authentication and a modular, testable REST API architecture.");
  drawBullet("Implemented schema validation and relational data modeling, then deployed to production with a live demo.");
  y -= 2;

  // SecureVault
  page.drawText("SecureVault — Encrypted Notes Platform", { x: leftMargin, y, size: 9.5, font: fontBold, color: textColor });
  const proj2W = fontBold.widthOfTextAtSize("SecureVault — Encrypted Notes Platform", 9.5);
  page.drawText("  |  React, Node.js, Express, MongoDB, JWT", { x: leftMargin + proj2W, y, size: 9, font: fontOblique, color: lightGray });
  y -= 13;
  drawBullet("Built a secure notes application with authentication, encrypted storage, and a per-user file upload pipeline.");
  drawBullet("Deployed front-end and back-end separately in a production configuration, handling integration, debugging, and performance tuning end-to-end.");

  // SECTION: EDUCATION
  drawSectionHeader("EDUCATION");

  // MCA
  page.drawText("Master of Computer Applications (MCA), Computer Science", { x: leftMargin, y, size: 9.5, font: fontBold, color: textColor });
  const mcaW = fontBold.widthOfTextAtSize("Master of Computer Applications (MCA), Computer Science", 9.5);
  page.drawText(" — Poornima University, Jaipur", { x: leftMargin + mcaW, y, size: 9.5, font: fontOblique, color: textColor });
  const mcaDate = "2025 – 2027";
  const mcaDateW = fontOblique.widthOfTextAtSize(mcaDate, 9);
  page.drawText(mcaDate, { x: rightMargin - mcaDateW, y, size: 9, font: fontOblique, color: textColor });
  y -= 13;
  drawBullet("Relevant coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Software Engineering.");
  y -= 2;

  // Bachelor's
  page.drawText("Bachelor's Degree", { x: leftMargin, y, size: 9.5, font: fontBold, color: textColor });
  const bachW = fontBold.widthOfTextAtSize("Bachelor's Degree", 9.5);
  page.drawText(" — Maharaja Surajmal Brij University (MSBU)", { x: leftMargin + bachW, y, size: 9.5, font: fontOblique, color: textColor });
  const bachDate = "2022 – 2025";
  const bachDateW = fontOblique.widthOfTextAtSize(bachDate, 9);
  page.drawText(bachDate, { x: rightMargin - bachDateW, y, size: 9, font: fontOblique, color: textColor });
  y -= 13;

  // SECTION: CERTIFICATIONS
  drawSectionHeader("CERTIFICATIONS");
  drawBullet("API Security on Google Cloud's Apigee API Platform — Google Cloud");
  drawBullet("Google Cloud Computing Foundations: Cloud Computing Fundamentals — Google Cloud");
  drawBullet("Red Hat System Administration I (RH124) — Red Hat");

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Successfully generated resume PDF at ${outputPath}`);
}

createResumePdf().catch(console.error);
