import React from 'react';
import {useForm,ValidationError} from '@formspree/react';
import {CheckCircle2,Send} from 'lucide-react';
import {services,business} from './data';

/** Formspree sends enquiries directly from the browser, without a Cloudflare Function. */
export default function ContactForm(){
  const [state,handleSubmit,reset]=useForm('xkjoradp');
  if(state.succeeded){
    return <div className="contactform form-success" role="status" aria-live="polite">
      <CheckCircle2 size={44} aria-hidden="true"/>
      <h3>Thank you for reaching out!</h3>
      <p>Your enquiry has been submitted successfully. We’ll review your message and get back to you using the contact details you provided.</p>
      <button type="button" className="btn" onClick={reset}>Send another enquiry ↗</button>
      <p className="fine">For a time-sensitive request, you can also contact us on <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
    </div>;
  }
  return <form className="contactform" onSubmit={handleSubmit} method="POST" aria-label="Project enquiry form">
    <h3>Tell us about your project</h3>
    <p>Complete this form and we’ll receive your enquiry directly. Fields marked * are required.</p>
    <div className="fieldrow">
      <label htmlFor="contact-name">Full name *<input id="contact-name" name="name" autoComplete="name" minLength={2} maxLength={120} required placeholder="Your name"/></label>
      <label htmlFor="contact-email">Email address *<input id="contact-email" name="email" autoComplete="email" type="email" required placeholder="you@example.com"/><ValidationError className="formerror" field="email" prefix="Email" errors={state.errors}/></label>
    </div>
    <div className="fieldrow">
      <label htmlFor="contact-phone">Phone / WhatsApp (optional)<input id="contact-phone" name="phone" autoComplete="tel" type="tel" maxLength={25} placeholder="+91 ..."/></label>
      <label htmlFor="contact-service">Service required *<select id="contact-service" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(s=><option key={s.slug} value={s.name}>{s.name}</option>)}<option value="Other / Multiple services">Other / Multiple services</option></select></label>
    </div>
    <div className="fieldrow">
      <label htmlFor="contact-date">Project / event date (optional)<input id="contact-date" name="project_date" type="date"/></label>
      <label htmlFor="contact-location">City / project location (optional)<input id="contact-location" name="city" autoComplete="address-level2" maxLength={120} placeholder="City or remote"/></label>
    </div>
    <label htmlFor="contact-message">Tell us about your requirement *<textarea id="contact-message" name="message" rows={5} minLength={10} maxLength={6000} required placeholder="What are you planning? Include services, scope, timing and any useful details."/><ValidationError className="formerror" field="message" prefix="Message" errors={state.errors}/></label>
    <label className="consent"><input type="checkbox" name="privacy_consent" value="I consent to submission processing" required/> <span>I agree to share my information with CLICKWORTHY BY DTC via Formspree for a response to my enquiry. Read our <a href="/privacy-policy">Privacy Policy</a>.</span></label>
    <div className="form-gotcha" aria-hidden="true"><label>Leave this field empty<input name="_gotcha" tabIndex={-1} autoComplete="off"/></label></div>
    <ValidationError className="formerror" errors={state.errors}/>
    <button className="btn form-submit" type="submit" disabled={state.submitting} aria-busy={state.submitting}>
      {state.submitting?'Sending enquiry…':'Send enquiry'} <Send size={16} aria-hidden="true"/>
    </button>
    <p className="formnote">Your message is submitted through Formspree. You do not need an email application.</p>
  </form>;
}
