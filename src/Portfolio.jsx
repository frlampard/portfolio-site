import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <section className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Keonrok's Portfolio</h1>
          <p className="text-lg text-gray-600">Software QA Engineer / Developer</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a passionate QA engineer with experience in testing, backend
            development with Java Spring, and frontend implementation using
            React. Skilled in Oracle DB and Agile workflows.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
            <li>Java / Spring Framework</li>
            <li>Oracle Database</li>
            <li>React.js</li>
            <li>HTML / CSS / JavaScript</li>
            <li>Jira / Trello / TestRail</li>
            <li>Postman / Selenium / Git</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Digital Twin QA Platform</h3>
              <p className="text-gray-700">
                QA testing and validation for a digital twin solution using 360°
                imagery and spatial accuracy verification.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Customer Support System (Spring + Oracle)</h3>
              <p className="text-gray-700">
                Developed backend features for a customer support platform using
                Java Spring and Oracle DB integration.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <ul className="list-inside list-disc">
            <li>Email: example@email.com</li>
            <li>GitHub: https://github.com/keonrok</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
