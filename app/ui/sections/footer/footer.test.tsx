import footerModelDefault, { FooterModelInstance, FooterModelInstanceIncarnation, FooterModelInstantiatorIncarnation } from './FooterModel';
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from '../../ModelIncarnation';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const testData = { id: 'test-id', copyrightText: 'All rights reserved.' }

describe('FooterModel default export', () => {

    it('is instance of ModelInstantiatorIncarnation', () => {
        expect(footerModelDefault).toBeInstanceOf(ModelInstantiatorIncarnation)
    });
    it('is instance of FooterModelInstantiatorIncarnation', () => {
        expect(footerModelDefault).toBeInstanceOf(FooterModelInstantiatorIncarnation)
    });

    describe('Instance from default export', () => {
        const instance = footerModelDefault.instantiate(
            {...testData}
        );

        it('is instance of ModelInstanceIncarnation', () => {
            expect(instance).toBeInstanceOf(ModelInstanceIncarnation)
        });
        it('is instance of FooterModelInstanceIncarnation', () => {
            expect(instance).toBeInstanceOf(FooterModelInstanceIncarnation)
        });
        it('corresponds with test data', () => {
            expect(instance.id).toEqual(testData.id);
            expect(instance.copyright).toContain(testData.copyrightText);
        });

    });
});

describe('Footer Component', () => {
    const modelInstance = footerModelDefault.instantiate({...testData});
    render(<Footer footerModelInstance={modelInstance} />);
    const componentElement = screen.getByTestId(
        modelInstance.footerModelInstanceClassName.getClassNameString
    );
    const copyrightElement = screen.getByTestId('copyright');

    it('renders footer element', () => {
        expect(componentElement.tagName.toLowerCase()).toEqual('footer');
    });
    it('maps all properties for core element', () => {
        expect(componentElement.className).toEqual(modelInstance.compositeClassNameString);
        expect(componentElement.id).toEqual(modelInstance.id);
    });
    it('maps all properties for copyright', () => {
        expect(copyrightElement.textContent).toEqual(modelInstance.copyright);
    });
})

