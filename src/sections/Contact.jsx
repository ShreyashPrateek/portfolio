import ContactForm from '../components/contact/ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact