'use client';

import { Button } from '@repo/ui/components/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { contactFormAction } from './actions';

export default function ContactPage() {
  const initialState = { ok: false, message: null };

  const [state, formAction] = React.useActionState(
    contactFormAction,
    initialState
  );

  return (
    <div className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-foreground">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card">
                    <Mail className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card">
                    <Phone className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      123 Business Street
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 font-semibold text-foreground text-lg">
                Office Hours
              </h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card p-8">
            <form action={formAction} className="space-y-6">
              <div className="flex items-center space-y-2">
                <label className="w-25 text-foreground" htmlFor="message">
                  Name
                </label>
                <input
                  className="ml-3 w-1/2 resize-none rounded-lg border border-indigo-600 p-2"
                  id="name"
                  name="name"
                  placeholder="Tell us your name..."
                  required
                />
              </div>
              <div className="flex space-y-2">
                <label className="w-25 text-foreground" htmlFor="email">
                  Email
                </label>
                <input
                  className="ml-3 w-1/2 rounded-lg border border-indigo-600 bg-background p-2"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="flex space-y-2">
                <label className="w-25 text-foreground" htmlFor="message">
                  Subject
                </label>
                <input
                  className="ml-3 w-1/2 resize-none rounded-lg border border-indigo-600 p-2"
                  id="subject"
                  name="subject"
                  placeholder="Enquiry subject..."
                  required
                />
              </div>

              <div className="flex space-y-2">
                <label className="w-25 text-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="ml-3 w-1/2 resize-none rounded-lg border border-indigo-600 p-2"
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={8}
                />
              </div>

              <div className="flex space-y-2">
                <label className="w-25 text-foreground" htmlFor="message">
                  Phone
                </label>
                <input
                  className="ml-3 w-1/2 resize-none rounded-lg border border-indigo-600 p-2"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  type="tel"
                />
              </div>

              <Button className="w-full" size="lg" type="submit">
                Send Message
              </Button>
            </form>
            {state.message && (
              <p
                className={state.ok ? 'p-4 text-green-600' : 'p-4 text-red-600'}
              >
                {state.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
