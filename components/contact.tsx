"use client";

import { MessageCircle, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-decoration" aria-hidden="true">
        <span className="contact-arc"></span>
        <span className="contact-dot"></span>
      </div>

      <div className="contact-container">

        {/* Header */}
        <div className="contact-label">
          <span>CONTACT / 05</span>
          <span>LET&apos;S CONNECT</span>
        </div>

        {/* Main */}
        <div className="contact-main">

          <div className="contact-text">
            <p className="contact-eyebrow">
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let&apos;s build
              <br />
              something <span>meaningful.</span>
            </h2>

            <p className="contact-description">
              I&apos;m always open to connecting, sharing ideas,
              and exploring new opportunities in technology
              and digital solutions.
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              const name = formData.get("name");
              const email = formData.get("email");
              const message = formData.get("message");

              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    message,
                  }),
                });

                const data = await response.json();

                if (!response.ok) {
                  alert(data.error || "Gagal mengirim pesan.");
                  return;
                }

                alert("Pesan berhasil dikirim!");
                form.reset();
              } catch (error) {
                console.error(error);
                alert("Terjadi kesalahan. Silakan coba lagi.");
              }
            }}
          >
            <p>LEAVE A MESSAGE</p>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows={5}
              required
            />

            <button type="submit">
              SEND MESSAGE ↗
            </button>
          </form>

          {/* Email */}
          <div className="contact-email">
            <p>GET IN TOUCH</p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=grisaputri99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              grisaputri99@gmail.com
            </a>

            <span className="email-line"></span>

            <small>
              Available for collaboration,
              projects &amp; opportunities.
            </small>
          </div>

        </div>

        {/* Social Links */}
        <div className="contact-links">

          {/* WhatsApp */}
          <a
            href="https://wa.me/6283194366461"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social whatsapp"
          >
            <div className="social-icon">
              <MessageCircle size={24} strokeWidth={1.8} />
            </div>

            <div className="social-info">
              <strong>WhatsApp</strong>
              <span>Chat with me</span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/grisaputri"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social instagram"
          >
            <div className="social-icon">
              <FaInstagram size={24} strokeWidth={1.8} />
            </div>

            <div className="social-info">
              <strong>Instagram</strong>
              <span>Follow me</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/grisa-putri-zahrani-7768b224a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social linkedin"
          >
            <div className="social-icon">
              <FaLinkedin size={24} strokeWidth={1.8} />
            </div>

            <div className="social-info">
              <strong>LinkedIn</strong>
              <span>Connect with me</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=grisaputri99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social email"
          >
            <div className="social-icon">
              <Mail size={24} strokeWidth={1.8} />
            </div>

            <div className="social-info">
              <strong>Email</strong>
              <span>Send me a message</span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/grisaputri-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social github"
          >
            <div className="social-icon">
              <FaGithub size={24} strokeWidth={1.8} />
            </div>

            <div className="social-info">
              <strong>GitHub</strong>
              <span>View my projects</span>
            </div>
          </a>

        </div>

        {/* Footer */}
        <div className="contact-footer">
          <span>GRISA PUTRI</span>
          <span>INFORMATION SYSTEMS</span>
          <span>© 2026</span>
        </div>

      </div>
    </section>
  );
}