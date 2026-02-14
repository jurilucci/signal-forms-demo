import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { apply, form, FormField, required, schema } from '@angular/forms/signals';

interface Address {
  street: string;
  city: string;
  zip: string;
}

interface CustomerData {
  name: string;
  billingAddress: Address;
  shippingAddress: Address;
}

@Component({
  selector: 'app-schemas',
  standalone: true,
  imports: [FormField],
  templateUrl: './schemas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchemasComponent {
  model = signal<CustomerData>({
    name: '',
    billingAddress: { street: '', city: '', zip: '' },
    shippingAddress: { street: '', city: '', zip: '' }
  });

  /** Schema riutilizzabile per Address: definito una volta, applicato a billing e shipping. */
  private static addressSchema = schema<Address>((addr) => {
    required(addr.street, { message: 'Via richiesta' });
    required(addr.city, { message: 'Città richiesta' });
    required(addr.zip, { message: 'CAP richiesto' });
  });

  customerForm = form(this.model, (customer) => {
    required(customer.name, { message: 'Nome richiesto' });
    apply(customer.billingAddress, SchemasComponent.addressSchema);
    apply(customer.shippingAddress, SchemasComponent.addressSchema);
  });
}
