import { workplaces } from '../../../data/profile';
import './WorkedWith.css';

/** Baris "Previously worked on" di referensi. */
export default function WorkedWith() {
  return (
    <div className="worked reveal">
      <h3 className="worked__label">Pernah bekerja di</h3>
      <ul className="worked__list">
        {workplaces.map(({ name, icon: Icon }) => (
          <li key={name} className="worked__item">
            <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
