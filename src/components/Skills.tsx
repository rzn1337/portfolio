export function Skills() {
    const skillCategories = {
    //   "Languages": ["JavaScript", "TypeScript", "Java", "Python", "SQL", "HTML/CSS"],
      "Frameworks": ["React", "Express.js", "Django", "Next", "Git", "SQL"],
    //   "Developer Tools": ["Git", "Docker", "Postman"],
    // //   "Libraries": ["pandas", "NumPy", "Matplotlib", "React"],
    //   "Certifications": [
    //     "IBM Data Science Professional Certificate",
    //     "Stanford Machine Learning Specialization",
    //     "Harvard CS50 AI"
    //   ]
    }
  
    return (
      <section id="skills" className="py-20">
        <h2 className="mb-8 text-4xl font-medium">Technical Skills</h2>
        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="space-y-4">
              {/* <h3 className="text-xl font-medium text-zinc-400">{category}</h3> */}
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="rounded-full border border-zinc-800 px-4 py-2 text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }