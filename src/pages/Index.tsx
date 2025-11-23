"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-center p-4">
        <div className="z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Empowering Communities, Changing Lives
          </h1>
          <p className="text-xl mb-8">
            Join us in making a difference. Your support transforms futures.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a href="/donate" target="_blank" rel="noopener noreferrer">
              Donate Now
            </a>
          </Button>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Our Mission Section */}
      <section className="container py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          At Charity Name, we are dedicated to [briefly state your core mission, e.g., providing education, clean water, healthcare]. We believe in a world where everyone has the opportunity to thrive.
        </p>
      </section>

      {/* How We Help Section */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-12">How We Make an Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center p-6 text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Operating in multiple countries, we address critical needs on a global scale.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold">Community Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work directly with local communities to build sustainable solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold">Compassionate Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing essential services with empathy and respect for all individuals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Cause</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Every contribution, big or small, helps us continue our vital work. Partner with us today.
        </p>
        <Button size="lg">
          <a href="/donate" target="_blank" rel="noopener noreferrer">
            Get Involved
          </a>
        </Button>
      </section>
    </Layout>
  );
};

export default Index;