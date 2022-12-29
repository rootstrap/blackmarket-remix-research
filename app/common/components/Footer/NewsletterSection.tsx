import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';

export const NewsletterSection = () => {
  return (
    <div className="w-1/3 text-white">
      <h3 className="text-2xl font-bold">
        Subscribe to our weekly newsletter!
      </h3>
      <InputField name="email" label="Email" placeholder="Type your email" />
      <Button
        variant="outline"
        label="Subscribe"
        className="mb-4 w-full border-white py-2 text-white"
      />
      <p className="text-sm">
        By subscribing you agree to receive weekly emails with our latest news
        and updates.
      </p>
    </div>
  );
};
