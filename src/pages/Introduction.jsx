export default function Introduction() {
  return (
    <section>
      <h2>Introduction Form</h2>
      <h3>Please submit the form below.</h3>

      {/* Visual-only version of your form (no JS behavior needed for the React mirror) */}
      <form id="form">
        <fieldset>
          <legend>Basic Information</legend>

          <label htmlFor="first_name">First Name *</label>
          <input type="text" id="first_name" defaultValue="Luis" required />

          <label htmlFor="middle_name">Middle Name (optional)</label>
          <input type="text" id="middle_name" placeholder="Enter middle name" />

          <label htmlFor="preferred_name">Preferred Name (optional)</label>
          <input type="text" id="preferred_name" placeholder="Enter nickname" />

          <label htmlFor="last_name">Last Name *</label>
          <input type="text" id="last_name" defaultValue="Betancourt" required />
        </fieldset>

        <fieldset>
          <legend>Acknowledgment</legend>

          <label htmlFor="ack_statement">Acknowledgment Statement *</label>
          <textarea id="ack_statement" required rows={3} defaultValue="I understand this work is my own." />

          <label htmlFor="ack_date">Acknowledgment Date *</label>
          <input type="date" id="ack_date" required defaultValue="2025-10-26" />
        </fieldset>

        <fieldset>
          <legend>Mascot</legend>

          <label htmlFor="mascot_adj">Mascot Adjective *</label>
          <input id="mascot_adj" required defaultValue="Luminous" />

          <label htmlFor="mascot_animal">Mascot Animal *</label>
          <input id="mascot_animal" required defaultValue="Bison" />

          <label htmlFor="mascot_divider">Divider *</label>
          <input id="mascot_divider" required defaultValue="|" />
        </fieldset>

        <fieldset>
          <legend>Picture</legend>

          <label htmlFor="profile_pic">Profile Picture *</label>
          <input type="file" id="profile_pic" accept="image/*" />
          <input type="hidden" id="default_image" defaultValue="images/default-profile.jpg" />

          <label htmlFor="img_caption">Picture Caption *</label>
          <input id="img_caption" required defaultValue="Luis Betancourt at UNC Charlotte" />
        </fieldset>

        <fieldset>
          <legend>Personal Statement</legend>
          <textarea
            id="personal_statement"
            required
            rows={3}
            defaultValue="I’m passionate about technology and design, combining both in creative projects."
          />
        </fieldset>

        <fieldset id="courses_section">
          <legend>Courses</legend>

          <div className="course-entry">
            <label>Department *</label>
            <input id="course_dept_1" required defaultValue="ITIS" />

            <label>Course Number *</label>
            <input id="course_num_1" required defaultValue="3135" />

            <label>Course Name *</label>
            <input
              id="course_name_1"
              required
              defaultValue="Web-Based App Design & Development"
            />

            <label>Reason *</label>
            <input
              id="course_reason_1"
              required
              defaultValue="To strengthen my front-end development skills."
            />
          </div>

          {/* Buttons kept for visual parity */}
          <button type="button" id="add_course_btn">Add Course</button>
        </fieldset>

        <fieldset>
          <legend>Favorite Quote</legend>

          <label htmlFor="quote_text">Quote *</label>
          <textarea id="quote_text" required rows={2} defaultValue="Discipline now is freedom later." />

          <label htmlFor="quote_author">Quote Author *</label>
          <input id="quote_author" required defaultValue="Unknown" />
        </fieldset>

        <fieldset>
          <legend>Extras (Optional)</legend>

          <label htmlFor="funny_thing">Funny thing (optional)</label>
          <input id="funny_thing" defaultValue="I treat my code like it’s alive." />

          <label htmlFor="share_thing">Something I’d like to share (optional)</label>
          <textarea id="share_thing" rows={3} defaultValue="I love creating and improving digital experiences." />
        </fieldset>

        <fieldset>
          <legend>Links</legend>

          <label>Link 1 *</label>
          <input type="url" id="link1" required defaultValue="https://www.linkedin.com/" />

          <label>Link 2 *</label>
          <input type="url" id="link2" required defaultValue="https://github.com/" />

          <label>Link 3 *</label>
          <input type="url" id="link3" required defaultValue="https://webpages.charlotte.edu/" />

          <label>Link 4 *</label>
          <input type="url" id="link4" required defaultValue="https://lbetanc21.github.io/" />

          <label>Link 5 *</label>
          <input type="url" id="link5" required defaultValue="https://betancourtco.co/" />
        </fieldset>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button type="button" id="clear_button">Clear</button>
          <button type="button" id="btn-generate-json">Generate JSON</button>
          <button type="button" id="btn-generate-html">Generate HTML</button>
        </div>
      </form>

      {/* Visual placeholders for original output sections */}
      <section id="result" hidden></section>
      <section id="json_section" hidden></section>
      <section id="html_section" hidden></section>

      {/* The validator/footer UI from the original page is handled by your global footer */}
    </section>
  );
}
